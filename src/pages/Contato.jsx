import React from "react";
import { Container, Button } from "react-bootstrap";

const Contato = () => {
  // Número do WhatsApp (substitua pelo seu número)
  const numeroWhatsApp = "+5527998831999"; // Coloque seu número aqui

  // Mensagem de exemplo que será enviada
  const mensagem =
    "Olá, gostaria de enviar a seguinte notícia:\n\n'Grande evento de tecnologia na cidade!'";

  // Criar a URL para o WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensagem
  )}`;

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-primary">
        Quer mandar uma notícia?
      </h2>
      <p className="text-center mb-4">
        Clique no botão abaixo para enviar sua notícia para o nosso WhatsApp!
      </p>

      {/* Exemplo de Notícia (Imagem e Texto Centralizados) */}
      <div className="text-center mb-5">
        <h4>Exemplo de Notícia:</h4>
        <p>
          <strong>Imagem: </strong>
          <img
            src="https://placehold.co/500x300" // Exemplo de imagem
            alt="Exemplo de Notícia"
            className="img-fluid mb-3"
          />
        </p>

        <p>
          <strong>Título: </strong> "Grande evento de tecnologia acontece na
          cidade!"
        </p>
        <p>
          <strong>Texto: </strong> "Hoje, na cidade de São Paulo, um grande
          evento de tecnologia foi realizado, reunindo especialistas e
          inovadores para discutir as últimas tendências. O evento contou com
          palestras de líderes da indústria e exposições de novos produtos.
          Milhares de pessoas compareceram e participaram ativamente das
          discussões. Foi um evento de grande sucesso, que marcou a história da
          cidade no setor de tecnologia."
        </p>
      </div>

      {/* Botão para Enviar ao WhatsApp */}
      <div className="text-center mb-5">
        <Button variant="primary" href={urlWhatsApp} target="_blank">
          Enviar para o WhatsApp
        </Button>
      </div>
    </Container>
  );
};

export default Contato;
