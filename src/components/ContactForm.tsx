import { forwardRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

interface RecaptchaProps {
  onChange: (token: string | null) => void;
}

const Recaptcha = forwardRef<any, RecaptchaProps>(
  ({ onChange }, ref) => {
    return (
      <ReCAPTCHA
        ref={ref}
        sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
        onChange={onChange}
        onExpired={() => onChange(null)}
        onErrored={() => onChange(null)}
      />
    );
  }
);

Recaptcha.displayName = "Recaptcha";

export default Recaptcha;
