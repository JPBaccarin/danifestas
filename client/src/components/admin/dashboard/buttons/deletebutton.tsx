// components/DeleteDecorationDialog.tsx
"use client";
import React from "react";
import axios from "axios";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface DeleteDecorationDialogProps {
  decorationId: number;
  onDeleteSuccess: () => void;
}

const DeleteDecorationDialog: React.FC<DeleteDecorationDialogProps> = ({
  decorationId,
  onDeleteSuccess,
}) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3003/decorations/${decorationId}`);

      // Chame a função de sucesso passada como prop
      onDeleteSuccess();
    } catch (error) {
      // Trate o erro, se necessário
      console.error("Erro ao excluir decoração:", error);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="mb-2 me-2 rounded-lg bg-gradient-to-r from-red-500 via-red-600 to-red-700 px-5  py-2.5 text-center text-sm font-medium text-white shadow-md duration-300 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800">
          Excluir
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-thin">
            Você tem certeza que deseja excluir essa decoração?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Essa ação não pode ser desfeita. Essa decoração será excluída
            permanentemente.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            className="h-10 rounded-lg bg-gradient-to-r from-red-500 via-red-600   to-red-700 px-4 py-2   text-white shadow-md transition-all duration-300  hover:from-red-600 hover:via-red-700 hover:to-red-800 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
            onClick={handleDelete}
          >
            Excluir
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteDecorationDialog;
