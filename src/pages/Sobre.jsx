import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Sobre.css'; // Certifique-se de estilizar conforme necessário

const Sobre = () => {
  const pessoas = {
    aprovadoria: [
      'Nome 1', 'Nome 2', 'Nome 3', 'Nome 4', 'Nome 5', 'Nome 6',
      'Nome 7', 'Nome 8', 'Nome 9', 'Nome 10', 'Nome 11', 'Nome 12'
    ],
    edicao: ['Nome 1', 'Nome 2', 'Nome 3', 'Nome 4'],
    fotos: ['Nome 1', 'Nome 2', 'Nome 3'],
    entretenimento: ['Nome 1', 'Nome 2', 'Nome 3'],
    revisao: ['Nome 1', 'Nome 2', 'Nome 3']
  };

  const categorias = [
    { titulo: 'Aprovadoria', nomes: pessoas.aprovadoria },
    { titulo: 'Edição', nomes: pessoas.edicao },
    { titulo: 'Fotos', nomes: pessoas.fotos },
    { titulo: 'Entretenimento', nomes: pessoas.entretenimento },
    { titulo: 'Revisão', nomes: pessoas.revisao }
  ];

  return (
    <Container className="mt-5 mb-5">
      <h1 className="text-center mb-4">Como Surgiu a Ideia</h1>

      <p className="text-center mb-5 paragrafo-sobre">
        A ideia surgiu a partir da professora de português, que nos inspirou a criar esse projeto. 
        Através de diversas mãos e talentos, o projeto ganhou forma e hoje é o resultado do trabalho coletivo de todos.
      </p>

      <h3 className="text-center mb-4 text-primary">Equipe composta por:</h3>

      <Row xs={1} sm={2} md={3} lg={6} xl={5} className="g-5">
        {categorias.map((cat, idx) => (
          <Col key={idx}>
            <Card className="custom-card h-100 p-3">
              <Card.Body>
                <Card.Title className="card-title text-primary fw-bold">{cat.titulo}</Card.Title>
                <Card.Text>
                  {cat.nomes.map((nome, i) => (
                    <div key={i} className="card-name mb-1">{nome}</div>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5">
        <h4 className="text-dark fw-bold destaque-autor">
          Site desenvolvido por <span className="text-primary"><br />Matheus Miossi Schmidt</span>
        </h4>
      </div>
    </Container>
  );
};

export default Sobre;
