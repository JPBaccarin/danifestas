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
      <div className="m2 relative mb-5 flex w-full flex-col items-center justify-between gap-2 sm:flex-row">
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
          className={`inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
            showDropdown ? "bg-blue-700 dark:bg-blue-500" : ""
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
          <div className="absolute right-0 translate-y-[170px] translate-x-2 mt-1 flex w-96 flex-col gap-2 divide-gray-100 rounded-lg bg-white p-4 shadow dark:bg-gray-700">
            {categories.map((category, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={category}
                  checked={filterData.category === category}
                  onChange={() => handleRadioChange("category", category)}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                {category || "Todas as Categorias"}
              </label>
            ))}
            {types.map((type, index) => (
              <label key={index} className="flex items-center gap-2">
                <input
                  type="radio"
                  value={type}
                  checked={filterData.type === type}
                  onChange={() => handleRadioChange("type", type)}
                  className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                />
                {type || "Todos os Tipos"}
              </label>
            ))}
            <div className="mt-4 flex w-full justify-center gap-6">
              <button className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
                Aplicar
              </button>
              <button
                className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              >
                Limpar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filter3;
