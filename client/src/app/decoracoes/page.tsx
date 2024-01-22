// components/Dashboard.tsx
"use client";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { AlertDialog } from "@/components/ui/alert-dialog";
import Filter3, { FilteredData } from "@/components/decoracoes/filter/filter3";
import CardDashboard from "@/components/admin/dashboard/card/carddashboard";

interface Decoration {
  id_deco: number;
  titulo: string;
  tipo: string;
  categoria: string;
  tema: string;
  images: string[];
}

const Decoracoes: React.FC = () => {
  const [decorations, setDecorations] = useState<Decoration[]>([]);
  const [filteredDecorations, setFilteredDecorations] = useState<Decoration[]>(
    [],
  );
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [uniqueTypes, setUniqueTypes] = useState<string[]>([]);
  const [uniqueThemes, setUniqueThemes] = useState<string[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get<Decoration[]>(
        "http://localhost:3003/decorations/",
      );
      setDecorations(response.data);

      // Extrai opções únicas de categorias, tipos e temas
      const categories = Array.from(
        new Set(response.data.map((item) => item.categoria || "")),
      );
      const types = Array.from(
        new Set(response.data.map((item) => item.tipo || "")),
      );
      const themes = Array.from(
        new Set(response.data.map((item) => item.tema || "")),
      );

      setUniqueCategories(["", ...categories]);
      setUniqueTypes(["", ...types]);
      setUniqueThemes(["", ...themes]);

      // Inicializa as decorações filtradas com todas as decorações
      setFilteredDecorations(response.data);
    } catch (error) {
      console.error("Erro ao obter decorações:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterChange = useCallback(
    (filterData: FilteredData) => {
      const filteredItems = decorations.filter((item) => {
        const categoryMatch =
          filterData.category === "" || item.categoria === filterData.category;
        const typeMatch =
          filterData.type === "" || item.tipo === filterData.type;
        const themeMatch =
          filterData.theme === "" || item.tema === filterData.theme;
        const searchMatch =
          item.titulo.toLowerCase().includes(filterData.search.toLowerCase()) ||
          (item.tipo &&
            item.tipo.toLowerCase().includes(filterData.search.toLowerCase())) ||
          (item.tema &&
            item.tema.toLowerCase().includes(filterData.search.toLowerCase())) ||
          (item.categoria &&
            item.categoria.toLowerCase().includes(filterData.search.toLowerCase()));

        return categoryMatch && typeMatch && themeMatch && searchMatch;
      });

      setFilteredDecorations(filteredItems);
    },
    [decorations],
  );

  return (
    <div className="mt-16">
      <Filter3
        categories={uniqueCategories}
        types={uniqueTypes}
        themes={uniqueThemes}
        onFilterChange={handleFilterChange}
      />
      <div className="grid grid-cols-1 gap-4 sm:m-5 sm:grid-cols-2 md:grid-cols-3">
        {filteredDecorations.map((decoration) => (
          <CardDashboard
            key={decoration.id_deco}
            category={decoration.categoria}
            title={decoration.titulo}
            theme={decoration.tema}
            type={decoration.tipo}
            images={decoration.images.map(
              (image) => `http://localhost:3003/${image}`,
            )}
          >
          </CardDashboard>
        ))}
      </div>
    </div>
  );
};

export default Decoracoes;
