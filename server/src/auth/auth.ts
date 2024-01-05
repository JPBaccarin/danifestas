// src/auth.ts
import { sign, verify } from "jsonwebtoken";

const secret = "15b38e8fc8e25f8da38d653f1c5404bb9804dcfafe1b44e09496d89a63321c96"; 

export const createToken = (userId: number): string => {
  return sign({ userId }, secret, { expiresIn: "1h" });
};

export const verifyToken = (token: string): { userId: number } | null => {
  try {
    const decoded = verify(token, secret) as { userId: number };
    return decoded;
  } catch (error) {
    return null;
  }
};
