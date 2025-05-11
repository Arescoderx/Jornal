import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import './Contato.css';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    noticia: '',
    imagem: null
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'imagem') {
      setFormData({ ...formData, imagem: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar os dados para o servidor/back-end
    console.log(formData);
    setEnviado(true);
    setFormData({ nome: '', noticia: '', imagem: null });
  };

  return (
    <Container className="mt-5 contato-container">
      <h2 className="text-center mb-4 text-primary">Envie sua Notícia</h2>

      {enviado && (
        <Alert variant="success" onClose={() => setEnviado(false)} dismissible>
          Obrigado! Sua notícia foi enviada com sucesso.
        </Alert>
      )}

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
          <Button variant="primary" type="submit">
            Enviar Notícia
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default Contato;