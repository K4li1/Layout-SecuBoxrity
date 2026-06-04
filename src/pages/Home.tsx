import { useEffect, useState } from "react";
import Box from "../assets/box.svg";
import Caminhao from "../assets/Caminhao.svg";
import Check from "../assets/Check.png";
import Close from "../assets/close.svg";
import Escudo from "../assets/Escudo.svg";
import Facebook from "../assets/facebook 1.png";
import Instagram from "../assets/instagram 1.png";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg"; // ./ -> olha para pasta que esta pages  ../ -> sai da pasta vai para a pasta que guarda a pasta que voce esta
import ProfileImageOne from "../assets/Pessoa1.png";
import RectangleOne from "../assets/RectangleOne.png";
import RectangleTwo from "../assets/RectangleTwo.png";
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

  let TextoplaceDesketop = "Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?";
  let TextoplaceMobile = "Motivo do contato. Ex qual o valor de x?";

  const [showMobileMenu, setShowMobileMenu] = useState(false);

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
          <Card img={Caminhao} subtitulo="Entregas mais seguras" descricao="Com a nossa tecnologia podemos diminuir os casos de entregas em lugares incorretos, garantindo que suas encomendas cheguem onde devem estar." />
          <Card img={Escudo} subtitulo="Embalagens e segurança" descricao="Nossas embalagens são projetadas para garantir a integridade e segurança de seus produtos durante o transporte e à prova de água." />
        </section>
      </section>
      {/* Continuar daqui */}


      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">
              Conselho de quem conhece
            </p>
            <h2>Cada cliente importa!</h2>
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
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />

            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />

            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />





          </div>

          <div className="carousel-content">
            {/* Aqui replicar */}
            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />

            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
            />

            <TestimonialCard
              cargo="CEO links"
              imagem={ProfileImageOne}
              nome="Julios"
              quantidadEstrelas={5}
              testemunho="Certamente o mercado chinês de eletricos está bombando, só existe
                  uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
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

        <form className="comunicado">
          <input type="text" placeholder="Seu melhor Email" />

          <input className="placeholder_desketop" type="text" placeholder={TextoplaceDesketop} />
          <input className="placeholder_mobile" type="text" placeholder={TextoplaceMobile} />

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
                Analise de reconhecimento por digital, rastreamento de encomendas e alerta de roubo a autoridades por dispositivos embutidos ou aplicativos.
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
              <p>Você tem direito a usar nosso aplicativo de localizador de encomendas e reconhecimento por digital</p>
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
            <div>
              <img src={Instagram} alt="Instagram" />
              <img src={Facebook} alt="Facebook" />
              <img src={Youtube} alt="Youtube" />
            </div>
          </div>

          <div>
            <h2>Empresa</h2>
            <div className="Empresa">
              <a href="#">Sobre nos</a>
              <a href="#">Faca parte do time</a>
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
