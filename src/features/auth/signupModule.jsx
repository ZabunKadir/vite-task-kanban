import React from "react";
import SignupForm from "./signupForm";

const SignUpModule = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Kayıt Ol</h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default SignUpModule;
