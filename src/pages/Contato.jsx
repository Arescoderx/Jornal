import React, { useState } from "react";
import { Container, Form, Button, Modal, Spinner } from "react-bootstrap";
import "./Contato.css";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    noticia: "",
    imagem: null,
  });

  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "imagem") {
      setFormData({ ...formData, imagem: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("nome", formData.nome);
    formDataToSend.append("noticia", formData.noticia);
    formDataToSend.append("imagem", formData.imagem);

    fetch("http://localhost:5174/contato", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then(() => {
        setFormData({ nome: "", noticia: "", imagem: null });
        setShowModal(true); // Mostrar modal de confirmação
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao enviar dados", error);
        setLoading(false);
      });
  };

  return (
    <Container className="mt-5 contato-container">
      <h2 className="text-center mb-4 text-primary">Envie sua Notícia</h2>

      <Form onSubmit={handleSubmit} className="formulario-contato">
        <Form.Group className="mb-3">
          <Form.Label>Seu Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            placeholder="Digite seu nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Imagem</Form.Label>
          <Form.Control
            type="file"
            name="imagem"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Notícia</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            name="noticia"
            placeholder="Digite o conteúdo da notícia"
            value={formData.noticia}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <Spinner animation="border" size="sm" />
            ) : (
              "Enviar Notícia"
            )}
          </Button>
        </div>
      </Form>

      {/* Modal de confirmação */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Notícia Enviada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Sua notícia foi enviada com sucesso. Obrigado pela colaboração!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => setShowModal(false)}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Contato;
