'use client'
import Dashboard from "@/components/admin/dashboard/dasboard";
import DecorationForm from "@/components/admin/dashboard/formdeco";
import React from "react";
import { PrivateRoute } from "@/components/utils/authMiddleware";
import { useEffect } from "react";
function page() {
  useEffect(() => {
    // Lógica específica da página do dashboard
    console.log("Página do Dashboard carregada");
  }, []);
  return (
    <PrivateRoute>
      <div className="mt-12 flex min-h-screen border border-none">
        <div className="flex w-full flex-col">
          <h1 className="mx-4 mb-2 mt-6 text-2xl underline">
            Decorações Salvas
          </h1>
          <Dashboard />
          <DecorationForm></DecorationForm>
        </div>
      </div>
    </PrivateRoute>
  );
}

export default page;
