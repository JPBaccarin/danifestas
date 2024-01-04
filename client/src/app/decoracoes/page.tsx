"use client";
import React, { useState, useEffect, useCallback } from "react";
import ItemCard, { ItemCardProps } from "@/components/decoracoes/card/card";
import Whatsb from "@/components/whatsappbutton/whatsb";
import FilterComponent, {
  FilteredData,
} from "@/components/decoracoes/filter/filter";
import SkeletonCard from "@/components/decoracoes/card/skeletoncard";
import Minetable from "@/components/mine-table/minetable";
import Filter3 from "@/components/decoracoes/filter/filter3";

const Decoracoes: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<ItemCardProps[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [uniqueTypes, setUniqueTypes] = useState<string[]>([]);
  const [portfolioData, setPortfolioData] = useState<ItemCardProps[]>([
    {
      category: "Mini-table",
      event: "Aniversário2",
      type: "Infantil",
      title: "Corithians",
      images: [
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/364130128_669041688591957_8179597957600495012_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=jHdVW4rPqXcAX86ZY09&_nc_ht=scontent.fqps5-1.fna&oh=00_AfAlNa-TMqn3YnBXTPxglQ0vC-C1zBK27OeXwibLY0YD6A&oe=659B5DC3",
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/363450496_669041628591963_4647107378733481250_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=Ew_zGo6Nhw0AX_reCwv&_nc_ht=scontent.fqps5-1.fna&oh=00_AfCbo3NAobNuIVmq9A7LYazOIqFC5-VcEoj38d_mf2RyrA&oe=659CCF55",
      ],
    },
    {
      category: "Decoração comum",
      event: "Casamento",
      type: "Infantil",
      title: "Fortnite",
      images: [
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/364751402_669037508592375_5340689398791763219_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=5Xzq3LPBgsYAX-o7NKE&_nc_ht=scontent.fqps5-1.fna&oh=00_AfAPZAJbUMKbADbHmqNQlti0_Mbr2v0tGKIrdymBphouCg&oe=659B6317",
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/364793004_669037575259035_6817353567365663172_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=DfuOgM2xsFgAX_KpnhA&_nc_ht=scontent.fqps5-1.fna&oh=00_AfASqj3NL_sFULdlYaNVXUdQgV9V9HBYhwDZ0tOKUHVt5g&oe=659BDC1C",
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/365179104_669037465259046_3256471307116343466_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=2oU54-A3U-UAX-jsXcw&_nc_ht=scontent.fqps5-1.fna&oh=00_AfA6diSbzFQjFu-GzAdVlwT72hZrjIC4bi5xGKOZqtQ7NQ&oe=659CBE19",
      ],
    },
    {
      category: "Decoração comum",
      event: "Casamento",
      type: "Adulto",
      title: "Neon Party",
      images: [
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/362945985_665644415598351_666533672258944326_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=g8PjLeviSZgAX_4AT5v&_nc_ht=scontent.fqps5-1.fna&oh=00_AfB49xfg1RpeHuMF3ISJ5v95TPLAoXLhAANkSCAXakPqdw&oe=659C06D0",
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/363744576_665644535598339_775625120969484636_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=dld_m27lQT0AX9cu05P&_nc_ht=scontent.fqps5-1.fna&oh=00_AfAD0uJ4C11rnQo87veotigMTUGfQxNPc9hg_WKgF25l9w&oe=659B2407",        
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/362946795_665644372265022_166551565214021231_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3635dc&_nc_ohc=anq7wVR2VyoAX_ofV_E&_nc_ht=scontent.fqps5-1.fna&oh=00_AfBIJAASC7FWjDNmctUTS_6JjoZZ064k2xG3d9R6P5LK-w&oe=659B6624",        
      ],
    },
    {
      category: "Mini-table",
      event: "Casamento",
      type: "Empresarial",
      title: "Decoração Formal",
      images: [
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/362943479_665549888941137_5020244819028338028_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Kl9qOCJkcaAAX85m0lq&_nc_ht=scontent.fqps5-1.fna&oh=00_AfDzlFolyjXjgAK8Ve17KfwX7yofqg9mXCgNO6B88N_51w&oe=659BDFE6",
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/362939633_665549765607816_6053814916190549258_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=g4SA-VVohaAAX_tJ1Dn&_nc_ht=scontent.fqps5-1.fna&oh=00_AfAE6q2esKIbkHoApUqlZvzQ7cTm5Wcbo0U0haaKvXAW-w&oe=659C8353",
        "https://scontent.fqps5-1.fna.fbcdn.net/v/t39.30808-6/362948661_665549818941144_435954260242002549_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=0RNNSDxCqhkAX8B1z0a&_nc_ht=scontent.fqps5-1.fna&oh=00_AfAdUauelxFsrvBhTdhRrr8XM2yfd5NXnQpXRYWlGBGpBQ&oe=659CE12E",
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
      <Filter3
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
