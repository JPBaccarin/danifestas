// Importe as bibliotecas necessárias
'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";

// Defina o tipo para a resposta do servidor
interface Decoration {
  id_deco: number;
  titulo: string;
  tipo: string;
  categoria: string;
  tema: string;
  images?: string[];
}

// Componente para exibir as decorações
function DecorationPage() {
  const [decorations, setDecorations] = useState<Decoration[]>([]);

  useEffect(() => {
    // Função para obter as decorações do servidor
    const fetchDecorations = async () => {
      try {
        const response = await axios.get<Decoration[]>("http://localhost:3003/decorations");
        setDecorations(response.data);
      } catch (error) {
        console.error("Erro ao obter decorações:", error);
      }
    };

    // Chama a função para obter decorações quando o componente monta
    fetchDecorations();
  }, []); // O array vazio garante que a função só seja chamada uma vez, equivalente ao componentDidMount

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Decorações</h2>

      {decorations.length > 0 ? (
        decorations.map((decoration) => (
          <div key={decoration.id_deco} className="mb-8">
            <h3 className="text-xl font-semibold mb-2">{decoration.titulo}</h3>
            <p>Tipo: {decoration.tipo}</p>
            <p>Categoria: {decoration.categoria}</p>
            <p>Tema: {decoration.tema}</p>

            {decoration.images && decoration.images.length > 0 ? (
              <div className="mt-4">
                {decoration.images.map((imageName, index) => (
                  <img
                    key={index}
                    src={`http://localhost:3003/uploads/${imageName}`}
                    alt={`Imagem ${index + 1}`}
                    className="mr-2 mb-2"
                  />
                ))}
              </div>
            ) : (
              <p>Sem imagens disponíveis</p>
            )}
          </div>
        ))
      ) : (
        <p>Sem decorações disponíveis</p>
      )}
    </div>
  );
}

export default DecorationPage;
