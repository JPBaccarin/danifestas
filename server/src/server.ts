// src/server.ts
import express from "express";
import pool, { query } from "./db/db";
import bcrypt from "bcrypt";
import multer from "multer";
import jwt from "jsonwebtoken";

const app = express();
const PORT = 3003;
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000", // Troque para a origem real do seu aplicativo React
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Permitir credenciais (cookies, tokens, etc.)
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());

app.post("/decorations", upload.array("images", 20), async (req, res) => {
  const { titulo, tipo, categoria, tema } = req.body;
  const images: Express.Multer.File[] = req.files as Express.Multer.File[];

  try {
    // Adicionar decoração
    const decorationQuery = "INSERT INTO decoracoes (titulo, tipo, categoria, tema) VALUES (?, ?, ?, ?)";
    const decorationValues = [titulo, tipo, categoria, tema];

    // Execute a consulta para adicionar a decoração
    const resultDecoration = await query(decorationQuery, decorationValues);

    // Verifique se a inserção da decoração foi bem-sucedida
    if (resultDecoration && resultDecoration[0] && resultDecoration[0].insertId) {
      const id_deco = resultDecoration[0].insertId;

      // Adicionar imagens associadas à decoração
      const imageQuery = "INSERT INTO imagens (id_deco, url) VALUES (?, ?)";
      const imageValues = images.map((image) => [id_deco, `data:image/jpeg;base64,${image.buffer.toString("base64")}`]);

      // Execute a consulta para adicionar as imagens
      await Promise.all(imageValues.map((values) => query(imageQuery, values)));

      res.status(201).json({ message: "Decoração adicionada com sucesso!" });
    } else {
      res.status(500).json({ error: "Erro ao adicionar decoração. ID não disponível." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao adicionar decoração." });
  }
});

function createToken(userId: number): string {
  const secretKey = "suaChaveSecreta"; // Substitua com uma chave secreta real
  const expiresIn = "1h"; // Defina o tempo de expiração do token

  const token = jwt.sign({ userId }, secretKey, { expiresIn });
  return token;
}

app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Adicione a lógica para validar os dados usando Zod aqui

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Inserir usuário no banco de dados
    const insertUserQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    const result = await query(insertUserQuery, [username, email, hashedPassword]);

    const userId = result.insertId;

    // Criar token
    const token = createToken(userId);

    res.status(201).json({ success: true, message: "Usuário cadastrado com sucesso", userId, token });
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
    res.status(500).json({ success: false, message: "Erro ao cadastrar usuário" });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await query("SELECT user_id, email, password FROM users WHERE email = ?", [email]);

    if (user.length > 0) {
      const userId = user[0].id;
      const storedPassword = user[0].password;

      const passwordMatch = await bcrypt.compare(password, storedPassword);

      if (passwordMatch) {
        const userId = user[0].id;
        const token = createToken(userId); // Use a função para gerar o token
        res.json({ token });
      } else {
        res.status(401).json({ error: "Credenciais inválidas" });
      }
    }
  } catch (error) {
    console.error("Erro ao realizar o login:", error);
    res.status(500).json({ error: "Erro ao realizar o login" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
