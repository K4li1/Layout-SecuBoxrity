import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactPayload {
  email: string;
  message: string;
  captchaToken: string;
}

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "";

// Hostnames aceitos na verificação do reCAPTCHA, separados por vírgula.
// Ex: ALLOWED_RECAPTCHA_HOSTNAMES=meusite.netlify.app,meusite.com.br
// Se a variável não estiver definida, a checagem de hostname é simplesmente ignorada.
const ALLOWED_RECAPTCHA_HOSTNAMES = (process.env.ALLOWED_RECAPTCHA_HOSTNAMES ?? "")
  .split(",")
  .map((h) => h.trim())
  .filter(Boolean);

const corsHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers["origin"] ?? "";

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders(origin),
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Método não permitido." }),
    };
  }

  let payload: ContactPayload;

  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Body inválido." }),
    };
  }

  const { email, message, captchaToken } = payload;

  if (!email?.trim() || !message?.trim() || !captchaToken?.trim()) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error: "Campos obrigatórios: email, message e captchaToken.",
      }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "E-mail inválido." }),
    };
  }

  // Validação do token no backend — obrigatória
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.error("RECAPTCHA_SECRET_KEY não configurada.");

    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error: "Configuração de segurança indisponível.",
      }),
    };
  }

  try {
    const captchaParams = new URLSearchParams({
      secret: process.env.RECAPTCHA_SECRET_KEY,
      response: captchaToken,
    });

    const captchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: captchaParams.toString(),
      }
    );

    const captchaResult: {
      success: boolean;
      hostname?: string;
      challenge_ts?: string;
      ["error-codes"]?: string[];
    } = await captchaResponse.json();

    // Log de diagnóstico — pode remover depois de confirmar success: true nos logs da Netlify
    console.log("reCAPTCHA verify:", {
      httpStatus: captchaResponse.status,
      success: captchaResult.success,
      hostname: captchaResult.hostname,
      errors: captchaResult["error-codes"],
    });

    if (!captchaResult.success) {
      console.error("reCAPTCHA inválido:", captchaResult["error-codes"]);

      return {
        statusCode: 403,
        headers: corsHeaders(origin),
        body: JSON.stringify({
          error: "Não foi possível validar o reCAPTCHA. Tente novamente.",
        }),
      };
    }

    // Validação extra: só aceita tokens resolvidos no(s) seu(s) domínio(s) autorizado(s)
    if (
      ALLOWED_RECAPTCHA_HOSTNAMES.length > 0 &&
      !ALLOWED_RECAPTCHA_HOSTNAMES.includes(captchaResult.hostname ?? "")
    ) {
      console.error(
        "reCAPTCHA hostname não autorizado:",
        captchaResult.hostname
      );

      return {
        statusCode: 403,
        headers: corsHeaders(origin),
        body: JSON.stringify({
          error: "Não foi possível validar o reCAPTCHA. Tente novamente.",
        }),
      };
    }
  } catch (error) {
    console.error("Erro ao verificar reCAPTCHA:", error);

    return {
      statusCode: 502,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error: "Erro ao validar a proteção. Tente novamente.",
      }),
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // Escapa email e mensagem antes de inserir no HTML, evitando injeção de marcação
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    await transporter.sendMail({
      from: `SecurityBox <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: "[SecurityBox] Nova mensagem - Landing Page",
      text: `E-mail do remetente: ${email}\n\nMensagem:\n${message}`,
      html: `
        <h2>Nova mensagem de contato - SecurityBox</h2>
        <p><strong>E-mail do remetente:</strong> ${safeEmail}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        message: "E-mail enviado com sucesso.",
      }),
    };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);

    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({
        error: "Falha ao enviar o e-mail. Tente novamente mais tarde.",
      }),
    };
  }
};

export { handler };