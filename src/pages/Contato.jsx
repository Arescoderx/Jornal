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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Cria um FormData para enviar com a imagem e os outros dados
    const formDataToSend = new FormData();
    formDataToSend.append('nome', formData.nome);
    formDataToSend.append('noticia', formData.noticia);
    formDataToSend.append('imagem', formData.imagem); // Envia a imagem

    try {
      // Envia os dados para o backend (alterar a URL para seu backend real)
      const response = await fetch('http://localhost:3000/noticias', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setEnviado(true);
        setFormData({ nome: '', noticia: '', imagem: null });
      } else {
        throw new Error('Erro ao enviar notícia');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar os dados. Tente novamente.');
    }
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
