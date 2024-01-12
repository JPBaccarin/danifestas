import Dashboard from "@/components/admin/dashboard/dasboard";
import DecorationForm from "@/components/admin/dashboard/formdeco";
import React from "react";

function page() {
  return (
    <div className="flex min-h-screen mt-12 border border-none">
      <div className="w-full flex flex-col">
        <h1 className="mt-6 underline mb-2 mx-4 text-2xl">Decorações Salvas</h1>
        <Dashboard/>
        <DecorationForm></DecorationForm>
      </div>
    </div>
  );
}

export default page;
