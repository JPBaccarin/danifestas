// src/controllers/decorationsController.ts
import { Request, Response } from "express";
import pool from "../db/db";

export const getAllDecorations = async (req: Request, res: Response) => {
  try {
    const decorationsQuery = "SELECT * FROM decoracoes";
    const decorations = await pool.query(decorationsQuery);

    const decorationsWithImages: any[] = [];

    for (const decoration of decorations) {
      const imagesQuery = "SELECT * FROM imagens WHERE id_deco = ?";
      const images = await pool.query(imagesQuery, [decoration.id_deco]);
      decorationsWithImages.push({ ...decoration, images });
    }

    res.json(decorationsWithImages);
  } catch (error) {
    console.error("Erro ao obter decorações:", error);
    res.status(500).json({ error: "Erro ao obter decorações." });
  }
};
