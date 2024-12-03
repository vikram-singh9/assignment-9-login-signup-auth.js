"use client";
import React from "react";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { FaFacebook } from "react-icons/fa";
const SignIn = () => {
  return (
    <div className="p-8">
      <Button onClick={() => signIn("google")} className="px-28 py-4 text-lg">
        <FaFacebook size={40} />
        SignIn with Google
      </Button>

      <div className="mt-7 flex items-center justify-center">
        <p>or</p>
      </div>
    </div>
  );
};

export default SignIn;
