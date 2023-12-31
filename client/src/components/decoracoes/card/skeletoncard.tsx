// components/SkeletonCard.tsx
"use client";
import React from "react";

const SkeletonCard: React.FC = () => {
  return (
    <div className="mt-2 rounded-lg border bg-white/75 p-6 shadow-md dark:bg-muted/25 dark:shadow-muted/10">
      {/* Imagem principal clicável (esqueleto) */}
      <div className="mb-2 h-64 sm:h-72 sm:max-h-72 w-full animate-pulse rounded-lg bg-gray-300 dark:bg-gray-600 "></div>

      {/* Título (esqueleto) */}
      <div className="my-4 h-2 w-1/2 animate-pulse rounded bg-gray-300 p-2  dark:bg-gray-600"></div>

      {/* Categoria (esqueleto) */}
      <div className="my-2  h-2 w-1/3 animate-pulse rounded bg-gray-200 p-2  dark:bg-gray-700 "></div>
    </div>
  );
};

export default SkeletonCard;
