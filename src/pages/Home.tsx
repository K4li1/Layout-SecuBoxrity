import { useEffect, useState } from "react";
import Close from "../assets/close.svg";
import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg"; // ./ -> olha para pasta que esta pages  ../ -> sai da pasta vai para a pasta que guarda a pasta que voce esta
import Box from "../assets/box.svg";
import Caminhao from "../assets/Caminhao.svg";
import Escudo from "../assets/Escudo.svg";
import RectangleOne from "../assets/RectangleOne.png";
import RectangleTwo from "../assets/RectangleTwo.png";
import Button from "../components/Button";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/utility.css";
import "../styles/solution.css";

export default function Home() {
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
                <a href="#contact">Contato</a>
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
            Cansou de ser roubado, entao hoje e o seu dia de sorte, estamos aqui
            para te ajudar!
          </h1>
          <p>
            Ja pensou em evitar perder sua encomenda, ou ate mesmo evitar ser
            roubado? Com a nossa tecnologia de ponta, voce pode ficar tranquilo
            sabendo que suas encomendas estao seguras com os nossos
            dispositivos. Nao perca mais tempo se preocupando com o roubo de
            encomendas, junte-se a nos hoje e experimente a diferenca que a
            nossa seguranca pode fazer!
          </p>
          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>
            <span className="desktop-only">
              <Button text="Para mais informacoes" secondary />
            </span>
          </div>
        </div>
      </section>

      <section id="hero"></section>

      <section id="solution">
        <header>
          <span>
            <h2>Soluções</h2>
            <span className="desktop-only">
              <h2>Sob medida para você</h2>
            </span>
          </span>
          <p>
            Inovação é com a gente! A <strong>DonaFrost </strong>
            já conquistou diversos clientes, seja você mais um deles, veja tudo
            que pode ganhar com nossos serviços.
          </p>
        </header>
        <section>
          <div>
            <img src={Box} alt="Caixa de papelao" />
            <h3>Produto Vencedor</h3>
            <p>Ideia matadora , nosso time ja ganhou diversas</p>
          </div>
        </section>
        <section className="even-columns">
          <div className="card">
            <span>
              <img src={Box} alt="ícone campeão" width={64} height={64} />
            </span>
            <div>
              <h3>Produto Vencedor</h3>
              <p>
                Ideia matadora, nosso time já ganhou diversos eventos de
                inovação com nosso produto, entre eles podemos citar o CityFarm
                da FAG e Startup Garage.
              </p>
              <hr />
            </div>
          </div>

          <div className="card">
            <span>
              <img src={Caminhao} alt="ícone campeão" width={64} height={64} />
            </span>
            <div>
              <h3>Produto Vencedor</h3>
              <p>
                Ideia matadora, nosso time já ganhou diversos eventos de
                inovação com nosso produto, entre eles podemos citar o CityFarm
                da FAG e Startup Garage.
              </p>
              <hr />
            </div>
          </div>

          <div className="card">
            <span>
              <img src={Escudo} alt="ícone campeão" width={64} height={64} />
            </span>
            <div>
              <h3>Produto Vencedor</h3>
              <p>
                Ideia matadora, nosso time já ganhou diversos eventos de
                inovação com nosso produto, entre eles podemos citar o CityFarm
                da FAG e Startup Garage.
              </p>
              <hr />
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
