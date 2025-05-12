const express = require("express");
const pool = require("./db");  // Conexão com PostgreSQL
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Rota para listar notícias
app.get("/noticias", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM noticias ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Rota para cadastrar notícia
app.post("/noticias", async (req, res) => {
  const { titulo, conteudo, imagem } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO noticias (titulo, conteudo, imagem) VALUES ($1, $2, $3) RETURNING *",
      [titulo, conteudo, imagem]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
