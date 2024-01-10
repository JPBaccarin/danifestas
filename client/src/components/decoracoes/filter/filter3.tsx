import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

export interface Filter3Props {
  categories: string[];
  types: string[];
  onFilterChange: (filterData: FilteredData) => void;
}

export interface FilteredData {
  category: string;
  type: string;
  search: string;
}

const Filter3: React.FC<Filter3Props> = ({
  categories,
  types,
  onFilterChange,
}) => {
  const [filterData, setFilterData] = useState<FilteredData>({
    category: "",
    type: "",
    search: "",
  });

  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    onFilterChange(filterData);
  }, [filterData, onFilterChange]);

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleRadioChange = (key: string, value: string) => {
    setFilterData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
    setShowDropdown(false);
  };
  
  return (
    <div className="m-5 mb-5 flex flex-col items-center justify-between gap-2">
      <div className="m2 relative mb-5 flex w-full  items-center justify-between gap-2 sm:flex-row">
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
          <div className="absolute right-0 z-10 mt-1 flex h-96 sm:w-96 translate-x-2 translate-y-[215px] flex-col gap-2 divide-gray-100 overflow-y-auto rounded-lg bg-white p-4 accent-[#E39CC1] shadow dark:bg-gray-700">
            <h1>Tipo</h1>
            {categories.map((category, index) => (
              <div key={index} className="mt-1 flex items-center gap-2">
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
            <h1 className="mt-6">Modelo</h1>
            {types.map((type, index) => (
              <div key={index} className="mt-1 flex items-center gap-2">
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
        )}
      </div>
    </div>
  );
};

export default Filter3;
