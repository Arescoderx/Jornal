import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";

function Home() {
  return (
    <div>
      <header className="header">
        <Container>
          <h1>Jornal da Escola São Geraldo</h1>
          <p>
            Fique por dentro das últimas notícias da nossa escola e da
            comunidade.
          </p>
        </Container>
      </header>
      <section className="main-news-section">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} lg={8} className="text-center">
              <h1 className="main-news-title">
                Escola São Geraldo Conquista Prêmio de Excelência Educacional
              </h1>
              <img
                src="https://placehold.co/1200x600"
                alt="Prêmio de Excelência Educacional"
                className="main-news-image"
              />
              <h4 className="main-news-subtitle">
                A Escola São Geraldo foi reconhecida como uma das melhores
                instituições educacionais da região.
              </h4>
              <p className="main-news-text">
                A Escola São Geraldo recebeu recentemente o Prêmio de Excelência
                Educacional 2025, um reconhecimento pelo seu esforço contínuo em
                oferecer educação de alta qualidade. A premiação foi realizada
                em uma cerimônia especial que contou com a presença de
                autoridades locais e representantes de diversas instituições
                educacionais. Este prêmio reflete o trabalho árduo de alunos,
                professores e funcionários, que juntos contribuem para um
                ambiente de aprendizado excepcional.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seção de Notícias 1 */}
      <section className="section red-section">
        <Container>
          <Row>
            <Col md={7}>
              <h2>Time Amarelo Conquista Ouro nas Olimpíadas!</h2>
              <p>
                O time amarelo da Escola São Geraldo fez história ao conquistar
                o ouro nas Olimpíadas escolares. O evento, que reuniu escolas de
                toda a cidade, teve disputas emocionantes em diversas
                modalidades, como futebol, basquete e vôlei. Os atletas
                mostraram dedicação e espírito esportivo durante toda a
                competição, e a vitória foi recebida com entusiasmo pela
                comunidade escolar.
              </p>
            </Col>
            <Col md={5}>
              <img
                src="https://placehold.co/600x350"
                alt="Time Amarelo nas Olimpíadas"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seção de Notícias 2 */}
      <section className="section green-section">
        <Container>
          <Row>
            <Col md={5} className="order-md-1 order-2 ">
              <img
                src="https://placehold.co/600x350"
                alt="Feira de Ciências"
                className="img-fluid custom-image-margin"
              />
            </Col>
            <Col md={6} className="order-md-2 order-1 custom-text-margin">
              <h2>Feira de Ciências Impressiona a Comunidade</h2>
              <p>
                A Feira de Ciências da Escola São Geraldo foi um verdadeiro
                sucesso, com apresentações incríveis dos alunos. A criatividade
                foi o destaque do evento, com projetos como a utilização de
                energia solar para eletrodomésticos e até uma demonstração de
                robótica educacional. Pais, alunos e professores ficaram
                encantados com as inovações apresentadas.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Seção de Notícias 3 */}
      <section className="section yellow-section">
        <Container>
          <Row>
            <Col md={7}>
              <h2>Professor de Matemática Recebe Prêmio de Destaque</h2>
              <p>
                O professor João Silva foi reconhecido com o prêmio de "Melhor
                Educador" na área de Matemática. O prêmio reconhece sua
                abordagem inovadora no ensino da disciplina, incluindo o uso de
                tecnologias como softwares de geometria e plataformas de
                aprendizado online. Sua dedicação e métodos interativos ajudam a
                transformar a matemática em uma matéria divertida e acessível.
              </p>
            </Col>
            <Col md={5}>
              <img
                src="https://placehold.co/600x350"
                alt="Professor Premiado"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
