import { FormSignup } from "@/components/admin/signup/formsignup";
import React from "react";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-fit sm:w-1/3 rounded-lg border border-border bg-card p-4">
        <FormSignup></FormSignup>
      </div>
    </div>
  );
}

export default Login;
