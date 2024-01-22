import { FormLogin } from "@/components/admin/login/formlogin";
import React from "react";

function Login() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-fit w-11/12  sm:w-1/3 rounded-lg border border-border bg-card p-4">
        <FormLogin></FormLogin>
      </div>
    </div>
  );
}

export default Login;
