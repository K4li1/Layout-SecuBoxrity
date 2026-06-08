import { useEffect, useState } from "react";
import Box from "../assets/box.svg";
import Caminhao from "../assets/Caminhao.svg";
import Check from "../assets/Check.png";
import Close from "../assets/close.svg";
import Escudo from "../assets/Escudo.svg";
import Facebook from "../assets/facebook 1.png";
import Garfield from "../assets/Garfield.webp";
import Goku from "../assets/goku.webp";
import Instagram from "../assets/instagram 1.png";
import Julius from "../assets/Julius.jpg";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg"; // ./ -> olha para pasta que esta pages  ../ -> sai da pasta vai para a pasta que guarda a pasta que voce esta
import RectangleOne from "../assets/RectangleOne.svg";
import RectangleTwo from "../assets/RectangleTwo.svg";
import Seu_madruga from "../assets/Seu_madruga.jpg";
import Steve from "../assets/Steve.jpg";
import Thanos from "../assets/thanos.jpg";
import Youtube from "../assets/youtube 1.png";
import Button from "../components/Button";
import Card from "../components/Card";
import "../styles/Entrarcontato.css";
import "../styles/Footer.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/Pricing.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/utility.css";

import TestimonialCard from "../components/TestimonialCard";
import "../styles/Footer.css";

export default function Home() {

  let TextoplaceDesketop = "Motivo do contato. Ex: Gostaria de saber como funciona o rastreamento de encomendas?";
  let TextoplaceMobile = "Motivo do contato. Ex qual o valor de x?";

  const [email, setEmail] = useState('');
  const [textoDesktop, setTextoDesktop] = useState('');
  const [textoMobile, setTextoMobile] = useState('');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  async function sendContactEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const response = await fetch("/.netlify/functions/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        message: textoDesktop || textoMobile,
      }),
    });

    if (!response.ok) {
      const body = await response.json().catch(() => ({}));
      throw new Error(body.error ?? "Erro ao enviar mensagem.");
    }

    console.log("Enviado com sucesso!");
    setEmail("");
    setTextoDesktop("");
    setTextoMobile("");
  }

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);


  return (
    <main>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src={Logo} alt="Arrumado.svg" width={220} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#solution">Soluções</a>
              </li>

              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>

              <li>
                <a href="#pricing">Preços</a>
              </li>

              <li>
                <a href="#Contato">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>

              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <li>
                        <a
                          onClick={() => setShowMobileMenu(!showMobileMenu)}
                          href="#solution"
                        >
                          Home
                        </a>
                      </li>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#solution"
                      >
                        Solucao
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#solution"
                      >
                        Depoimentos
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#pricing"
                      >
                        Preços
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                        href="#contact"
                      >
                        Contato
                      </a>
                    </li>
                  </ul>

                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>
      <section id="hero">
        <span className="desktop-only">
          <img src={RectangleTwo} alt="Retangulo um tela inicial" />
        </span>
        <img src={RectangleOne} alt="Retangulo dois tela inicial" />
        <div className="container content">
          <p className="desktop-only">Seja Bem Vindo</p>
          <h1>
            Cansou de ser roubado? Então, hoje é o seu dia de sorte, estamos aqui para te ajudar!
          </h1>
          <p>
            Já pensou em evitar perder sua encomenda, ou até mesmo evitar ser roubado? Com a nossa tecnologia de ponta, você pode ficar tranquilo sabendo que suas encomendas estão seguras com os nossos dispositivos. Não perca mais tempo se preocupando com o roubo de encomendas, junte-se a nós hoje e experimente a diferença que a nossa segurança pode fazer!
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Saiba mais" secondary />
            </span>
          </div>
        </div>
      </section>

      <section id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>Sob medida para você</h2>
            </span>
          </span>
          <p>
            Inovação é o nosso forte! A <strong>Securitybox</strong> já conquistou a confiança de milhares de clientes. Venha ser o próximo e descubra tudo o que podemos fazer para a proteção de suas encomendas.
          </p>
        </header>
        <section className="even-columns">
          <Card img={Box} subtitulo="Caixas seguras" descricao="Usamos rastreador de encomendas, analise de identidade por toque e alerta de roubo a autoridades por dispositivos embutidos ou aplicativos." />
          <Card img={Caminhao} subtitulo="Entregas mais seguras" descricao="Com a nossa tecnologia podemos diminuir os casos de entregas em lugares incorretos, garantindo que suas encomendas cheguem onde devem estar. Chega de preocupações" />
          <Card img={Escudo} subtitulo="Embalagens e segurança" descricao="Nossas embalagens são projetadas para garantir a integridade e segurança de seus produtos durante o transporte e à prova de água, impedindo danos durante e após a entrega." />
        </section>
      </section>
      {/* Continuar daqui */}


      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">
              Experiência de alguns de nossos clientes
            </p>
            <h2>Depoimentos</h2>
          </span>
          <p>
            Quem nos conhece sabe do quanto somos seguros com suas encomendas, estamos tirando aquela ideia de que
            seu produto nunca esta seguro, veja abaixo alguns de nossos clientes satisfeitos.
          </p>

        </header>

        <section className="carousel">
          <div className="carousel-content">
            {/* Aqui replicar */}
            <TestimonialCard
              cargo="Lutador profissional"
              imagem={Goku}
              nome="Goku"
              quantidadEstrelas={4}
              testemunho="Agora eu sei aonde vão as esferas do dragão, com a segurança do Seguritybox eu posso ficar tranquilo sabendo que minhas esferas estão seguras e protegidas contra qualquer ameaça, seja um ladrão ou um vilão intergaláctico."
            />

            <TestimonialCard
              cargo="Desempregado"
              imagem={Garfield}
              nome="Garfield"
              quantidadEstrelas={5}
              testemunho="Agora sim posso receber minhas lasanhas sem me preocupar se alguem vai come-las antes de mim."
            />

            <TestimonialCard
              cargo="Entregador de jornais e Segurança de supermercado"
              imagem={Julius}
              nome="Julius"
              quantidadEstrelas={3}
              testemunho="Minhas encomendas nunca mais foram roubadas, pelo golpe baixo."
            />





          </div>

          <div className="carousel-content">
            {/* Aqui replicar */}
            <TestimonialCard
              cargo="Dominador de mundos"
              imagem={Thanos}
              nome="Thanos"
              quantidadEstrelas={3}
              testemunho="Agora eu posso dominar o mundo com as joias do infinito sem que haja imprevistos."
            />

            <TestimonialCard
              cargo="Sapateiro, carpinteiro, mecânico, encanador, pintor..."
              imagem={Seu_madruga}
              nome="Seu Madruga"
              quantidadEstrelas={4}
              testemunho="Que bom que minhas encomendas são entregues na minha casa e não na da Dona Florinda, realmente o localizador de encomenda é muito útil. Isto se outra pessoa pegar minha a minha encomenda por engano."
            />

            <TestimonialCard
              cargo="Minerador, construtor de pirâmides, caçador de tesouros..."
              imagem={Steve}
              nome="Steve"
              quantidadEstrelas={5}
              testemunho="Agora eu sei em quem devo confiar os meus diamantes."
            />



          </div>


        </section>
      </section>


      {/* minha parte */}
      <section id="Contato">
        <header>
          <span>
            <h2>Envie sua duvida</h2>
            <span className="desktop-only">
              <h2>Entre em contato</h2>
            </span>
          </span>
          <p className="textolongo">
            Entre em contato, estamos dispostos a tirar qualquer dúvida,
            seja um orçamento, uma dúvida técnica de como nossos produtos podem beneficia-lo.
            Estamos à disposição para responder. 😊
          </p>
          <p className="textocurto">Entre em contato, estamos dispostos a <br /> tirar qualquer dúvida😎.</p>
        </header>


        <form className="comunicado" onSubmit={sendContactEmail}>

          <input
            type="email"
            placeholder="Seu melhor Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="placeholder_desketop"
            type="text"
            required
            placeholder={TextoplaceDesketop}
            value={textoDesktop}
            onChange={(e) => setTextoDesktop(e.target.value)}
          />

          <input
            className="placeholder_mobile"
            type="text"
            required
            placeholder={TextoplaceMobile}
            value={textoMobile}
            onChange={(e) => setTextoMobile(e.target.value)}
          />

          <button className="botao" type="submit">Enviar</button>
        </form>
      </section>

      {/* Planos */}

      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">
            Planos e preços
          </p>
          <h2>Nossos planos</h2>
        </header>
        <section className="even-columns gap-1.5">
          {/* Plano Básico */}
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Você tem direito a usar nosso aplicativo de localizador de encomendas</p>
            </span>
            <h2>Grátis</h2>
            <Button text="Abaixe aqui" secondary key="free" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Evite ser roubado</p>
            </span> <ul className="features">
              <li> <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Seguro</p>
              </li>
            </ul>
          </div>
          {/* Plano Premium */}
          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>
            <span className="plan">
              <h3>Premium</h3>
              <p>
                Analise de reconhecimento por digital na embalagem, rastreamento de encomendas e alerta de roubo a autoridades por dispositivos embutidos ou aplicativos.
              </p>
            </span>
            <span className="price">
              <h2>R$ 60,00</h2>
              <p>/mês</p>
            </span>
            <Button text="Pedir agora" key="premium" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Analise de reconhecimento por digital na embalagem</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>rastreamento de encomendas</p>
            </span>
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>alerta de roubo a autoridades</p>
            </span>
          </div>

          {/* Plano Medio */}
          <div className="pricing-card">
            <span className="plan">
              <h3>Medio</h3>
              <p>Você tem direito a usar nosso aplicativo de localizador de encomendas e reconhecimento por digital na embalagem</p>
            </span>
            <span className="price">
              <h2>R$ 30,00</h2>
              <p>/mês</p>
            </span>
            <Button text="Pedir agora" secondary key="free" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Aumenta a segurança</p>
            </span> <ul className="features">
              <li> <img src={Check} alt="ícone check" width={24} height={24} />
                <p>Evite perder seus produtos</p>
              </li>
            </ul>
          </div>
        </section>
      </section>


      {/* Planos */}
      <footer id="footer">
        <section className="Redesociais">
          <div className="logomarca">
            <img src="src/assets/logo.svg" alt="Logo securitybox" />
            <div className="redes">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Instagram} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Facebook} alt="Facebook" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <img src={Youtube} alt="Youtube" />
              </a>
            </div>
          </div>

          <div>
            <h2>Empresa</h2>
            <div className="Empresa">
              <a href="#">Sobre nos</a>
              <a href="#">Participe da equipe</a>
              <a href="#">Blog</a>
            </div>
          </div>

          <div>
            <h2>Funcionalidades</h2>
            <div className="Funcionalidades">
              <a href="#">Marketing</a>
              <a href="#">Analise de dados</a>
              <a href="#">Boot discord</a>
            </div>
          </div>

          <div>
            <h2>Recursos</h2>
            <div className="Recursos">
              <a href="#">IOS & Android</a>
              <a href="#">Teste a Demo</a>
              <a href="#">Clientes</a>
              <a href="#">API</a>
            </div>
          </div>

        </section>
        <section className="Copyright">
          <p>Feito com amor na aula de Programação Web❤️ ©2026 SecurityBox - Todos os direitos reservados.</p>
        </section>
      </footer>


    </main>
  );
}
