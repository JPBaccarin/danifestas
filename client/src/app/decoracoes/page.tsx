"use client";
import React, { useState, useEffect, useCallback } from "react";
import ItemCard, { ItemCardProps } from "@/components/decoracoes/card/card";
import Whatsb from "@/components/whatsappbutton/whatsb";
import FilterComponent, {
  FilteredData,
} from "@/components/decoracoes/filter/filter";
import SkeletonCard from "@/components/decoracoes/card/skeletoncard";
import Minetable from "@/components/mine-table/minetable";

const Decoracoes: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<ItemCardProps[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [uniqueTypes, setUniqueTypes] = useState<string[]>([]);
  const [portfolioData, setPortfolioData] = useState<ItemCardProps[]>([
    {
      category: "A",
      event: "Aniversário2",
      type: "X",
      title: "Decoração 1",
      images: [
        "https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/44/494/325/the-beatles-monochrome-men-musician-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/124/990/570/music-the-beatles-british-music-bands-sgt-peppers-lonely-hearts-club-band-1680x1050-entertainment-music-hd-art-wallpaper-preview.jpg",
      ],
    },
    {
      category: "B",
      event: "Casamento",
      type: "Y",
      title: "Decoração 2",
      images: [
        "https://c4.wallpaperflare.com/wallpaper/124/990/570/music-the-beatles-british-music-bands-sgt-peppers-lonely-hearts-club-band-1680x1050-entertainment-music-hd-art-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/896/440/837/music-album-covers-the-beatles-abbey-road-wallpaper-preview.jpg",
        "https://c4.wallpaperflare.com/wallpaper/44/494/325/the-beatles-monochrome-men-musician-wallpaper-preview.jpg",
      ],
    },
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const categories = Array.from(
        new Set(portfolioData.map((item) => item.category || "")),
      );
      const types = Array.from(
        new Set(portfolioData.map((item) => item.type || "")),
      );

      setUniqueCategories(["", ...categories]);
      setUniqueTypes(["", ...types]);
      setLoading(false);
    });

    return () => clearTimeout(timeout);
  }, [portfolioData]);

  const handleFilterChange = useCallback(
    (filterData: FilteredData) => {
      const filteredItems = portfolioData.filter((item) => {
        const categoryMatch =
          filterData.category === "" || item.category === filterData.category;
        const typeMatch =
          filterData.type === "" || item.type === filterData.type;
        const searchMatch =
          item.title.toLowerCase().includes(filterData.search.toLowerCase()) ||
          (item.type &&
            item.type.toLowerCase().includes(filterData.search.toLowerCase()));

        return categoryMatch && typeMatch && searchMatch;
      });

      setFilteredData(filteredItems);
    },
    [portfolioData],
  );

  return (
    <div>
      <FilterComponent
        categories={uniqueCategories}
        types={uniqueTypes}
        onFilterChange={handleFilterChange}
      />  

      <div className="grid grid-cols-1 gap-4 sm:m-5 sm:grid-cols-2 md:grid-cols-3">
        {loading ? (
          // Renderiza esqueleto apenas durante o carregamento ou se não houver dados filtrados
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          // Renderiza os cards quando os dados estão prontos e filtrados
          filteredData.map((item, index) => <ItemCard key={index} {...item} />)
        )}
      
      </div>
      <Whatsb />
    </div>
  );
};

export default Decoracoes;
