import { ProfileForm } from "@/components/login/formlogin";
import React from "react";

function Login() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-1/2 w-1/3 bg-card p-4 rounded-lg border border-border">
        <ProfileForm></ProfileForm>
      </div>
    </div>
  );
}

export default Login;
