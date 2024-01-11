import DecorationForm from "@/components/admin/dashboard/formdeco";
import React from "react";

function page() {
  return (
    <div className="flex m-4 min-h-screen items-center justify-center ">
      <div className="p-4 sm:w-1/2">
        <DecorationForm></DecorationForm>
      </div>
    </div>
  );
}

export default page;
