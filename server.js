// server.js
import express from 'express';
import cors from 'cors';
import multer from 'multer';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;  // Escolha a porta que você quiser

// Configuração de CORS e Body-Parser
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do Multer (para upload de imagens)
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});
const upload = multer({ storage: storage });

// Rota para o formulário de envio de notícias
app.post('/contato', upload.single('imagem'), (req, res) => {
  console.log('Dados recebidos:', req.body);
  console.log('Imagem recebida:', req.file);
  res.status(200).json({ message: 'Notícia enviada com sucesso!' });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
