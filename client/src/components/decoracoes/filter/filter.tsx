import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

export interface FilterComponentProps {
  categories: string[];
  types: string[];
  onFilterChange: (filterData: FilteredData) => void;
}

export interface FilteredData {
  category: string;
  type: string;
  search: string;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  categories,
  types,
  onFilterChange,
}) => {
  const [filterData, setFilterData] = useState<FilteredData>({
    category: "",
    type: "",
    search: "",
  });

  useEffect(() => {
    onFilterChange(filterData);
  }, [filterData, onFilterChange]);

  const filterButtons = [
    { value: "", name: "Todas as decorações" },
    { value: "B", name: "Infantil" },
    { value: "A", name: "Adulto" },
    { value: "Electronics", name: "Corporativo" },
  ];
  return (
    <div className="m-5 mb-5 flex flex-col items-center justify-between  gap-2 ">
      <div>
        {filterButtons.map((button, index) => (
          <button
            key={index}
            type="button"
            className={`mb-3 me-3 rounded-full border border-white bg-white px-5 py-2.5 text-center text-base font-medium text-gray-900 hover:border-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-900 active:border-blue-950 focus:text-white focus:bg-blue-500 dark:bg-gray-900 dark:text-white dark:hover:border-gray-700 dark:focus:ring-blue-950 ${
              filterData.category === button.value
                ? "bg-blue-700 dark:bg-blue-500"
                : ""
            }`}
            onClick={() =>
              setFilterData((prevData) => ({
                ...prevData,
                category: button.value,
              }))
            }
          >
            {button.name}
          </button>
        ))}
      </div>
      <div className="m2 mb-5 flex w-full flex-col items-center justify-between  gap-2 sm:flex-row">
        <Input
          type="text"
          placeholder="Pesquisar..."
          className=" max-w-prose"
          value={filterData.search}
          onChange={(e) =>
            setFilterData((prevData) => ({
              ...prevData,
              search: e.target.value,
            }))
          }
        />
        <div className="flex w-full flex-col gap-2 sm:w-fit sm:flex-row">
          <select
            className="flex h-10  w-full items-center justify-between rounded-md border border-input bg-card p-2 px-3 py-2 text-sm ring-offset-muted placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit [&>span]:line-clamp-1 "
            value={filterData.category}
            onChange={(e) =>
              setFilterData((prevData) => ({
                ...prevData,
                category: e.target.value,
              }))
            }
          >
            {categories.map((category, index) => (
              <option
                key={index}
                value={category}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-card p-2 px-3 py-2 text-sm ring-offset-muted placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit [&>span]:line-clamp-1 "
              >
                {category || "Todas as Categorias"}
              </option>
            ))}
          </select>

          <select
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-card p-2 px-3 py-2 text-sm ring-offset-muted placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit [&>span]:line-clamp-1 "
            value={filterData.type}
            onChange={(e) =>
              setFilterData((prevData) => ({
                ...prevData,
                type: e.target.value,
              }))
            }
          >
            {types.map((type, index) => (
              <option
                key={index}
                value={type}
                className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-card p-2 px-3 py-2 text-sm ring-offset-muted placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 sm:w-fit [&>span]:line-clamp-1 "
              >
                {type || "Todos os Tipos"}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
