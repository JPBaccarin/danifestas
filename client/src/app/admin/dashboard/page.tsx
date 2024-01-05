"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

// Componente para o formulário de cadastro de decorações
function DecorationForm() {
  // Estados para armazenar os dados do formulário
  const [titulo, setTitulo] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [tema, setTema] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);

  // Manipulador de evento para o envio do formulário
  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Cria um objeto FormData para enviar os dados do formulário
      const formData = new FormData();
      formData.append("titulo", titulo);
      formData.append("tipo", tipo);
      formData.append("categoria", categoria);
      formData.append("tema", tema);

      // Adiciona cada imagem ao FormData
      images.forEach((image) => {
        formData.append("images", image);
      });

      // Faz a requisição POST para o endpoint de decorações no backend
      const response = await axios.post(
        "http://localhost:3003/decorations",
        formData,
      );

      // Lida com a resposta do servidor
      console.log("Resposta do servidor:", response.data);
    } catch (error) {
      // Lida com erros durante a requisição
      console.error("Erro durante o envio do formulário:", error);
    }
  };

  // Manipulador de evento para alterações no input de arquivo
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Verifica se foi selecionado algum arquivo
    if (e.target.files && e.target.files.length > 0) {
      // Atualiza o estado com as imagens selecionadas
      setImages([...images, e.target.files[0]]);
    }
  };

  return (
    <div>
      <h2>Cadastro de Decorações</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tipo">Tipo:</label>
          <input
            type="text"
            id="tipo"
            name="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="categoria">Categoria:</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="tema">Tema:</label>
          <input
            type="text"
            id="tema"
            name="tema"
            value={tema}
            onChange={(e) => setTema(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="images">Selecione as imagens:</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleFileChange}
          />
        </div>
        <div>
          <button type="submit">Cadastrar Decoração</button>
        </div>
      </form>
    </div>
  );
}

export default DecorationForm;
