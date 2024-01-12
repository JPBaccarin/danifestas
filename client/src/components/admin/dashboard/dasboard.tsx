// components/Dashboard.tsx
"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardDashboard from "./card/carddashboard";
import EditDecorationDialog from "./buttons/editbutton";
import DeleteDecorationDialog from "./buttons/deletebutton";
import { AlertDialog } from "@/components/ui/alert-dialog";

interface Decoration {
  id_deco: number;
  titulo: string;
  tipo: string;
  categoria: string;
  tema: string;
  images: string[];
}

const Dashboard: React.FC = () => {
  const [decorations, setDecorations] = useState<Decoration[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<Decoration[]>(
        "http://localhost:3003/decorations/"
      );
      setDecorations(response.data);
    } catch (error) {
      console.error("Erro ao obter decorações:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:m-5 sm:grid-cols-2 md:grid-cols-3   ">
      {decorations.map((decoration) => (
        <CardDashboard
          key={decoration.id_deco}
          category={decoration.categoria}
          title={decoration.titulo}
          theme={decoration.tema}
          type={decoration.tipo}
          images={decoration.images.map(
            (image) => `http://localhost:3003/${image}`
          )}
        >
          <div className="mt-2 flex justify-around ">
            <EditDecorationDialog
              decorationId={decoration.id_deco}
              onEditSuccess={fetchData}
            />

            <AlertDialog>
              <DeleteDecorationDialog
                decorationId={decoration.id_deco}
                onDeleteSuccess={fetchData}
              />
            </AlertDialog>
          </div>
        </CardDashboard>
      ))}
    </div>
  );
};

export default Dashboard;