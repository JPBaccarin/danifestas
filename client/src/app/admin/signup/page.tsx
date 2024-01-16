'use client'
import { FormSignup } from "@/components/admin/signup/formsignup";
import React from "react";
import { useEffect } from "react";
import { PrivateRoute } from "@/components/utils/authMiddleware";
function SignUp() {
useEffect(() => {
 

  return () => {
    
  }
}, [])


  return (
    <PrivateRoute>
      <div className="flex h-screen items-center justify-center">
        <div className="h-fit rounded-lg border border-border bg-card p-4 sm:w-1/3">
          <FormSignup></FormSignup>
        </div>
      </div>
    </PrivateRoute>
  );
}

export default SignUp;
