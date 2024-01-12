"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface EditDecorationDialogProps {
  decorationId: number;
  onEditSuccess: () => void;
}

const EditDecorationDialog: React.FC<EditDecorationDialogProps> = ({
  decorationId,
  onEditSuccess,
}) => {
  const [newTitle, setNewTitle] = useState("");
  const [newType, setNewType] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [newTheme, setNewTheme] = useState("");
  const [newImages, setNewImages] = useState<FileList | null>(null);

  const { toast } = useToast(); 

  const handleEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      newTitle === "" ||
      newType === "" ||
      newCategory === "" ||
      newTheme === "" ||
      (!newImages || newImages.length === 0)
    ) {
      toast({
        variant: "destructive",
        title: "Oh no! Algo de errado aconteceu.",
        description:
          "Erro ao atualizar a decoração. Verifique se todos os campos estão preenchidos corretamente",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("titulo", newTitle);
      formData.append("tipo", newType);
      formData.append("categoria", newCategory);
      formData.append("tema", newTheme);

      if (newImages) {
        for (let i = 0; i < newImages.length; i++) {
          formData.append("images", newImages[i]);
        }
      }

      toast({
        description: "Sua decoração foi atualizada com sucesso!",
      });
      await axios.put(
        `http://localhost:3003/decorations/${decorationId}`,
        formData,
      );

      setNewTitle("");
      setNewType("");
      setNewCategory("");
      setNewTheme("");
      setNewImages(null);

      onEditSuccess();
    } catch (error) {
      console.error("Erro ao atualizar decoração:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="dark:focus:ring-white-50 mb-2 me-2 rounded-lg bg-foreground bg-gradient-to-r  px-5 py-2.5 text-center text-sm font-medium text-background shadow-md duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-black/50 ">
          editar
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Editar Decoração</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleEdit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="titulo" className="font-semibold">
              Digite o novo título:
            </label>
            <input
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="block w-full max-w-[80%] rounded-lg border border-gray-300 bg-gray-50 px-4 py-[6px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-background dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type="text"
              id="titulo"
              name="titulo"
              autoComplete="off"
              placeholder="Digite aqui..."
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tipo" className="font-semibold">
              Digite o novo tipo:
            </label>
            <input
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
              className="block w-full max-w-[60%] rounded-lg border border-gray-300 bg-gray-50 px-4 py-[6px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-background dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type="text"
              id="tipo"
              name="tipo"
              autoComplete="off"
              placeholder="Digite aqui..."
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="categoria" className="font-semibold">
              Digite a nova categoria:
            </label>
            <input
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              className="block w-full max-w-[50%] rounded-lg border border-gray-300 bg-gray-50 px-4 py-[6px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-background dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type="text"
              id="categoria"
              name="categoria"
              autoComplete="off"
              placeholder="Digite aqui..."
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="tema" className="font-semibold">
              Digite o novo tema:
            </label>
            <input
              value={newTheme}
              onChange={(e) => setNewTheme(e.target.value)}
              className="block w-full max-w-[70%] rounded-lg border border-gray-300 bg-gray-50 px-4 py-[6px] text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-background dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              type="text"
              id="tema"
              name="tema"
              autoComplete="off"
              placeholder="Digite aqui..."
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="images" className="font-semibold">
              Selecione as novas imagens:
            </label>
            <input
              onChange={(e) => setNewImages(e.target.files)}
              className="text-md block w-full cursor-pointer rounded-r-lg border border-gray-300 bg-gray-50 font-medium text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-background dark:text-gray-400 dark:placeholder-gray-400"
              type="file"
              id="images"
              name="images"
              accept="image/*"
              multiple
            />
          </div>
          <div className=" flex justify-center">
            <DialogClose asChild>
              <button className="dark:focus:ring-white-50 mb-2 me-2 rounded-lg bg-foreground bg-gradient-to-r  px-5 py-2.5 text-center text-sm font-medium text-background shadow-md duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-black/50 ">
                Cancelar
              </button>
            </DialogClose>

            <button
              type="submit"
              className="mb-2 me-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white shadow-xl duration-300 hover:scale-105 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Atualizar Decoração
            </button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditDecorationDialog;
