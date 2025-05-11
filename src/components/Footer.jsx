import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";
import logo from "../assets/LogoSg.png"; // Logo do São Geraldo, troque conforme necessário

const Footer = () => {
  return (
    <footer className="footer_senai text-center text-lg-start text-black">
      <section className="d-flex justify-content-center align-items-center p-4 border-top border-bottom">
        <div className="me-2 d-none d-lg-block">
          <span>Conecte-se conosco nas redes sociais:</span>
        </div>
        <div className="d-flex ">
          <a href="#" className="me-2 text-reset">
            <FaFacebookF />
          </a>
          <a href="#" className="me-2 text-reset">
            <FaTwitter />
          </a>
          <a href="#" className="me-2 text-reset">
            <FaInstagram />
          </a>
          <a href="#" className="me-2 text-reset">
            <FaLinkedin />
          </a>
          <a href="#" className="me-2 text-reset">
            <FaYoutube />
          </a>
        </div>
      </section>

      <section className="info_footer">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem"></i> São Geraldo
              </h6>
              <img
                src={logo}
                alt="Logo São Geraldo"
                className="mb-3 imagem_footer"
              />
              <p>
                Instituição com foco em educação básica de qualidade, oferecendo
                desde a Educação Infantil até o Ensino Médio.
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                Modalidades de Ensino
              </h6>
              <p>
                <a href="#!" className="text-reset">
                  Educação Infantil
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ensino Fundamental - Anos Iniciais
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ensino Fundamental - Anos Finais
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Ensino Médio
                </a>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links úteis</h6>
              <p>
                <a href="#!" className="text-reset">
                  Portal do Aluno
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Fale Conosco
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Calendário Escolar
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <p>
                <i className="fas fa-home"></i> Rua Exemplo, 123 - Centro, São
                Geraldo - MG
              </p>
              <p>
                <i className="fas fa-envelope"></i>{" "}
                atendimento@saogeraldo.com.br
              </p>
              <p>
                <i className="fas fa-phone"></i> (31) 98765-4321
              </p>
              <p>
                <i className="fas fa-globe"></i> www.saogeraldo.com.br
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4" style={{ backgroundColor: "#e9ecef" }}>
        © {new Date().getFullYear()} São Geraldo - Todos os direitos reservados
      </div>
    </footer>
  );
};

export default Footer;
