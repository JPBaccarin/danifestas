"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Componente para o formulário de cadastro de decorações
function DecorationForm() {
  // Estados para armazenar os dados do formulário
  const [titulo, setTitulo] = useState<string>("");
  const [tipo, setTipo] = useState<string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [tema, setTema] = useState<string>("");
  const [images, setImages] = useState<File[]>([]);

  // Manipulador de evento para o envio do formulário
  async function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (
      titulo === "" ||
      tipo === "" ||
      categoria === "" ||
      tema === "" ||
      images.length === 0
    ) {
      toast({
        variant: "destructive",
        title: "Oh no! Algo de errado aconteceu.",
        description:
          "Erro ao cadastrar a decoração. Verifique se todos os campos estão preenchidos corretamente",
      });
      return; // Não continua para a requisição se os campos não estiverem preenchidos
    }

    try {
      const formData = new FormData();
      formData.append("titulo", titulo);
      formData.append("tipo", tipo);
      formData.append("categoria", categoria);
      formData.append("tema", tema);

      images.forEach((image) => {
        formData.append("images", image);
      });

      const response = await axios.post(
        "http://localhost:3003/decorations",
        formData,
      );
      
      toast({
        description: "Sua imagem foi cadastrada com Sucesso",
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    } catch (error) {
      console.error("Erro durante o envio do formulário:", error);
      toast({
        variant: "destructive",
        title: "Oh no! Algo de errado aconteceu.",
        description:
          "Erro durante o envio do formulário. Por favor, tente novamente.",
      });
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImages([...images, ...Array.from(e.target.files)]);
    }
  };

  const { toast } = useToast();

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="fixed bottom-10 right-10 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 shadow-xl duration-300 hover:scale-110">
            <Plus className="text-white" />
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md">
          <h2 className="text-center text-xl">Cadastro de Decorações</h2>
          <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="titulo" className="font-semibold">
                Título:
              </label>
              <input
                className="block w-full max-w-[80%] rounded-lg border border-gray-300 bg-gray-50 px-4 py-[6px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-background dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                type="text"
                id="titulo"
                name="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                autoComplete="off"
                placeholder="Digite aqui..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="tipo" className="font-semibold">
                Tipo:
              </label>
              <input
                className="block w-full max-w-[60%] rounded-lg border border-gray-300 bg-gray-50 px-4 py-[6px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-background dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                type="text"
                id="tipo"
                name="tipo"
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                autoComplete="off"
                placeholder="Digite aqui..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="categoria" className="font-semibold">
                Categoria:
              </label>
              <input
                className="block w-full max-w-[50%] rounded-lg border border-gray-300 bg-gray-50 px-4 py-[6px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-background dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                type="text"
                id="categoria"
                name="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                autoComplete="off"
                placeholder="Digite aqui..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="tema" className="font-semibold">
                Tema:
              </label>
              <input
                className="block w-full max-w-[70%] rounded-lg border border-gray-300 bg-gray-50 px-4 py-[6px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-background dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                type="text"
                id="tema"
                name="tema"
                value={tema}
                onChange={(e) => setTema(e.target.value)}
                autoComplete="off"
                placeholder="Digite aqui..."
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="images" className="font-semibold">
                Selecione as imagens:
              </label>
              <input
                className="text-md block w-full cursor-pointer rounded-r-lg border border-gray-300 bg-gray-50 font-medium text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-background dark:text-gray-400 dark:placeholder-gray-400"
                type="file"
                id="images"
                name="images"
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-xl duration-300 hover:scale-105 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
              >
                Cadastrar Decoração
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <Toaster />
    </div>
  );
}

export default DecorationForm;
