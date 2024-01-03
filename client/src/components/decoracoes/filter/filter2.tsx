"use client";
import React, { useState, useRef, useEffect } from "react";

function Filter2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdownOnOutsideClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeDropdownOnOutsideClick);
    };
  }, []);

  const clearSelections = () => {
    const radioButtons = document.querySelectorAll(
      'input[type="radio"][name^="tipo"], input[type="radio"][name^="modelo"]'
    );

    radioButtons.forEach((radio) => {
      (radio as HTMLInputElement).checked = false;
    });
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Filtros{" "}
        <svg
          className={`ms-3 h-2.5 w-2.5 ${
            isDropdownOpen ? "rotate-180 transform" : ""
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

      {isDropdownOpen && (
        <div
          id="dropdown"
          className="absolute mt-1 flex w-96 -translate-x-[275px] flex-col gap-2 divide-gray-100 rounded-lg bg-white p-4 shadow dark:bg-gray-700"
        >
          <h1>Tipo</h1>
          <div className="mt-2 flex items-center justify-between px-4">
            <div className="flex items-center py-6">
              <input
                id="mini-table"
                type="radio"
                name="tipo"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="mini-table"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mini table
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="decoracao"
                type="radio"
                name="tipo"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="decoracao"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Decoração comum
              </label>
            </div>
          </div>
          <h1>Modelo</h1>
          <div className="mt-2 flex items-center justify-between px-4">
            <div className="flex items-center py-6">
              <input
                id="infantil"
                type="radio"
                name="modelo"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="infantil"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Infantil
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="adulto"
                type="radio"
                name="modelo"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="adulto"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Adulto
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="empresarial"
                type="radio"
                name="modelo"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="empresarial"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Empresarial
              </label>
            </div>
          </div>
          <h1>Tema</h1>
          <div className="mt-2 flex items-center justify-between px-4">
            {/* conteudo aqui, fazer algo que junte os dois e adicione os estilos aqui */}
          </div>
          <div className="flex w-full justify-center gap-6">
            <button
              className="mb-2 me-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Aplicar
            </button>
            <button
              onClick={clearSelections}
              className="mb-2 me-2 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Limpar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter2;
