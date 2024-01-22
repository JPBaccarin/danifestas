import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";

export interface Filter3Props {
  categories: string[];
  types: string[];
  themes: string[];
  onFilterChange: (filterData: FilteredData) => void;
}

export interface FilteredData {
  category: string;
  type: string;
  theme: string;
  search: string;
}

const Filter3: React.FC<Filter3Props> = ({
  categories,
  types,
  themes,
  onFilterChange,
}) => {
  const [filterData, setFilterData] = useState<FilteredData>({
    category: "",
    type: "",
    theme: "",
    search: "",
  });

  const [showDropdown, setShowDropdown] = useState(false);
  const [expandCategory, setExpandCategory] = useState(false);
  const [expandType, setExpandType] = useState(false);
  const [expandTheme, setExpandTheme] = useState(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    onFilterChange(filterData);
  }, [filterData, onFilterChange]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) 
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const toggleExpandCategory = () => {
    setExpandCategory((prevExpand) => !prevExpand);
  };

  const toggleExpandType = () => {
    setExpandType((prevExpand) => !prevExpand);
  };

  const toggleExpandTheme = () => {
    setExpandTheme((prevExpand) => !prevExpand);
  };

  const handleRadioChange = (key: string, value: string) => {
    setFilterData((prevData) => ({
      ...prevData,
      [key]: value,
      search: "",
    }));
    setShowDropdown(false);
  };

  return (
    <div className="m-5 mb-5 flex flex-col items-center justify-between gap-2">
      <div
        className="m2 relative mb-5 flex w-full items-center justify-between gap-2 sm:flex-row"
        ref={dropdownRef}
      >
        <Input
          type="text"
          placeholder="Pesquisar..."
          className="max-w-prose"
          value={filterData.search}
          onChange={(e) =>
            setFilterData((prevData) => ({
              ...prevData,
              search: e.target.value,
            }))
          }
        />
        <button
          type="button"
          className={`inline-flex items-center rounded-full bg-[#E39CC1] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#dd8eb7] focus:outline-none focus:ring-4 focus:ring-[#fae5ec] ${
            showDropdown ? "bg-[#dd8eb7]  " : ""
          }`}
          onClick={toggleDropdown}
        >
          Filtrar{" "}
          <svg
            className={`ms-3 h-2.5 w-2.5 ${
              showDropdown ? "rotate-180 transform" : ""
            }`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        {showDropdown && (
          <div className="absolute right-0 z-10 mt-1 flex h-96 max-h-96 translate-x-2 translate-y-[215px] flex-col gap-2 divide-gray-100 overflow-y-auto rounded-lg bg-white p-4 accent-[#E39CC1] shadow sm:w-96 dark:bg-gray-700">
            <div className="flex flex-col gap-2">
              <h1
                className="flex cursor-pointer items-center justify-between border-b-2 border-foreground/60 p-[6px]"
                onClick={toggleExpandCategory}
              >
                Categoria
                <span>{expandCategory ? "-" : "+"}</span>
              </h1>
              {expandCategory &&
                categories.map((category, index) => (
                  <div key={index} className="mt-1 flex items-center gap-2 pl-[6px]">
                    <input
                      type="radio"
                      value={category}
                      checked={filterData.category === category}
                      onChange={() => handleRadioChange("category", category)}
                      className="h-4 w-4 border border-pink-300 bg-gray-100 focus:ring-2 focus:ring-[#dd8eb7]"
                    />
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      {category || "Todas as Categorias"}
                    </label>
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1
                className="flex cursor-pointer items-center justify-between border-b-2 border-foreground/60 p-[6px]"
                onClick={toggleExpandType}
              >
                Modelo
                <span>{expandType ? "-" : "+"}</span>
              </h1>
              {expandType &&
                types.map((type, index) => (
                  <div key={index} className="mt-1 flex items-center gap-2 pl-[6px]">
                    <input
                      type="radio"
                      value={type}
                      checked={filterData.type === type}
                      onChange={() => handleRadioChange("type", type)}
                      className="h-4 w-4 border border-pink-300 bg-gray-100 focus:ring-2 focus:ring-[#dd8eb7]"
                    />
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      {type || "Todos os Tipos"}
                    </label>
                  </div>
                ))}
            </div>
            <div className="flex flex-col gap-2">
              <h1
                className="flex cursor-pointer items-center justify-between border-b-2 border-foreground/60 p-[6px]"
                onClick={toggleExpandTheme}
              >
                Tema
                <span>{expandTheme ? "-" : "+"}</span>
              </h1>
              {expandTheme &&
                themes.map((theme, index) => (
                  <div key={index} className="mt-1 flex items-center gap-2 pl-[6px]">
                    <input
                      type="radio"
                      value={theme}
                      checked={filterData.theme === theme}
                      onChange={() => handleRadioChange("theme", theme)}
                      className="h-4 w-4 border border-pink-300 bg-gray-100 focus:ring-2 focus:ring-[#dd8eb7]"
                    />
                    <label className="text-sm font-medium text-gray-900 dark:text-gray-300">
                      {theme || "Todos os Temas"}
                    </label>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter3;
