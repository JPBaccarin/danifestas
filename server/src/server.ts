import express, { Request, Response, RequestHandler, NextFunction } from "express";
import { getConnection, query } from "./db/db";
import bcrypt from "bcrypt";
import multer from "multer";
import jwt from "jsonwebtoken";
import * as path from "path";
import fs from "fs";
const app = express();
const PORT = 3003;
app.use(express.json());
app.use(express.static("uploads"));
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// Permitir todas as origens para CORS (para desenvolvimento)
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Adicione Authorization ao header
  next();
})

app.use(express.json());

const uploadsPath = "uploads";
app.use("/uploads", express.static(uploadsPath));

app.get("/uploads/:filename", (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(uploadsPath, filename);

  // Verificar se o arquivo existe antes de enviá-lo
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.sendFile(filePath);
  }
});

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const uniqueFilename = `${Date.now()}_${Math.floor(Math.random() * 1000)}.${ext}`;
    cb(null, uniqueFilename);
  },
});

const upload = multer({ storage: storage });

app.post("/decorations", upload.array("images", 10) as RequestHandler, async (req: Request, res: Response) => {
  const { titulo, tipo, categoria, tema } = req.body;

  try {
    // Inserir dados da decoração no banco
    const insertDecorationQuery = "INSERT INTO decoracoes (titulo, tipo, categoria, tema) VALUES (?, ?, ?, ?)";
    const decorationResult = await query(insertDecorationQuery, [titulo, tipo, categoria, tema]);

    const decorationId = decorationResult.insertId;

    // Processar nomes das imagens (sem o localhost:3003)
    const imageNames = (req.files as Express.Multer.File[]).map((file) => file.filename);

    // Inserir nomes das imagens associadas à decoração no banco
    const insertImageQuery = `INSERT INTO imagens (id_deco, url) VALUES ${imageNames
      .map((name) => `(${decorationId}, '${name}')`)
      .join(", ")}`;

    await query(insertImageQuery);

    res.status(200).send("Decoração cadastrada com sucesso!");
  } catch (error) {
    console.error("Erro durante o cadastro da decoração:", error);
    res.status(500).send("Erro durante o cadastro da decoração");
  }
});

// Rota para obter todas as decorações com imagens
app.get("/decorations", async (req: Request, res: Response) => {
  try {
    const decorationsQuery = "SELECT * FROM decoracoes";
    const decorationsResults = await query(decorationsQuery);

    const decorationsWithImages = await Promise.all(
      decorationsResults.map(async (decoration: any) => {
        const imagesQuery = "SELECT url FROM imagens WHERE id_deco = ?";
        const imagesResults = await query(imagesQuery, [decoration.id_deco]);
        const images = imagesResults.map((image: any) => image.url);

        return { ...decoration, images };
      })
    );

    res.json(decorationsWithImages);
  } catch (error) {
    console.error("Erro ao obter decorações:", error);
    res.status(500).send("Erro interno ao obter decorações");
    console.error("Erro ao realizar o login", error); // Correção aqui
    res.status(500).json({ error: "Erro ao realizar o login" });
  }
});

// Rota para excluir uma decoração e suas imagens
app.delete("/decorations/:id", async (req: Request, res: Response) => {
  const decorationId = req.params.id;

  try {
    // Primeiro, obtemos os nomes dos arquivos das imagens associadas a essa decoração
    const imagesQuery = "SELECT url FROM imagens WHERE id_deco = ?";
    const imagesResults = await query(imagesQuery, [decorationId]);
    const imagePaths = imagesResults.map((image: any) => path.join(uploadsPath, image.url));

    // Em seguida, excluímos fisicamente os arquivos de imagem
    const deleteImagesQuery = "DELETE FROM imagens WHERE id_deco = ?";
    await query(deleteImagesQuery, [decorationId]);
    // Agora, podemos excluir os registros no banco de dados
    const deleteDecorationQuery = "DELETE FROM decoracoes WHERE id_deco = ?";
    await query(deleteDecorationQuery, [decorationId]);

    imagePaths.forEach((imagePath: string) => {
      fs.unlinkSync(imagePath);
    });
    res.status(200).send("Decoração excluída com sucesso!");
  } catch (error) {
    console.error("Erro durante a exclusão da decoração:", error);
    res.status(500).send("Erro durante a exclusão da decoração");
  }
});

app.put("/decorations/:id", upload.array("images", 10) as RequestHandler, async (req: Request, res: Response) => {
  const decorationId = req.params.id;
  const { titulo, tipo, categoria, tema } = req.body;

  try {
    // Obter nomes das imagens antigas associadas a essa decoração
    const oldImagesQuery = "SELECT url FROM imagens WHERE id_deco = ?";
    const oldImagesResults = await query(oldImagesQuery, [decorationId]);
    const oldImageNames = oldImagesResults.map((image: any) => image.url);

    // Excluir imagens antigas associadas a essa decoração
    const deleteImagesQuery = "DELETE FROM imagens WHERE id_deco = ?";
    await query(deleteImagesQuery, [decorationId]);

    // Remover fisicamente as imagens antigas do sistema de arquivos
    oldImageNames.forEach((imageName: string) => {
      const imagePath = path.join(uploadsPath, imageName); // Substitua 'uploadDir' pelo diretório real onde as imagens são armazenadas
      fs.unlinkSync(imagePath);
    });

    // Atualizar dados da decoração no banco
    const updateDecorationQuery =
      "UPDATE decoracoes SET titulo = ?, tipo = ?, categoria = ?, tema = ? WHERE id_deco = ?";
    await query(updateDecorationQuery, [titulo, tipo, categoria, tema, decorationId]);

    // Processar nomes das novas imagens (sem o localhost:3003)
    const newImageNames = (req.files as Express.Multer.File[]).map((file) => file.filename);

    // Inserir nomes das novas imagens associadas à decoração no banco
    const insertImageQuery = `INSERT INTO imagens (id_deco, url) VALUES ${newImageNames
      .map((name) => `(${decorationId}, '${name}')`)
      .join(", ")}`;

    await query(insertImageQuery);

    res.status(200).send("Decoração atualizada com sucesso!");
  } catch (error) {
    console.error("Erro durante a atualização da decoração:", error);
    res.status(500).send("Erro durante a atualização da decoração");
  }
});

function authenticateToken(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }

  jwt.verify(token, "suaChaveSecreta", (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Token inválido" });
    }

    // Adicione a propriedade 'user' ao objeto 'req'
    (req as any).user = user;
    next(); // Corrigido aqui
  });
}

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

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await query("SELECT user_id, email, password FROM users WHERE email = ?", [email]);

    if (user.length > 0) {
      const userId = user[0].user_id;
      const storedPassword = user[0].password;

      const passwordMatch = await bcrypt.compare(password, storedPassword);

      if (passwordMatch) {
        const token = createToken(userId);
        res.json({ token });
      } else {
        res.status(401).json({ error: "Credenciais inválidas" });
      }
    }
  } catch (error) {
    console.error("Erro ao realizar o login", error);
    res.status(500).json({ error: "Erro ao realizar o login" });
  }
});

app.get("/dashboard", authenticateToken, (req: Request, res: Response) => {
  // Esta rota só será acessível se o token for válido
  res.json({ message: "Bem-vindo ao dashboard!" });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
