import Dashboard from "@/components/admin/dashboard/dasboard";
import DecorationForm from "@/components/admin/dashboard/formdeco";
import React from "react";

function page() {
  return (
    <div className="flex  min-h-screen items-center justify-center  flex-col">
      <div className="p-4 sm:w-1/2">
        <DecorationForm></DecorationForm>
      </div>
      <div className=" border-t w-full flex flex-col">
        <h1 className="mt-6 underline mb-2 mx-4 text-2xl">Decorações Salvas</h1>
        <Dashboard/>
      </div>
    </div>
  );
}

export default page;
