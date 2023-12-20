"use client";
import Link from "next/link";
import React, { useState } from "react";
import LoginHeader from "./loginHeader";
import LoginForm from "./loginForm";
const LogIn = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.prevetDefault();
  };
  return (
    <div className="border py-20">
      <LoginHeader />
      <div className="text-center">
        <LoginForm />
      </div>
      <div className="pt-20 text-center text-white text-sm">
        <Link href={"/signup"}>Do not have an account? SignUp</Link>
      </div>
    </div>
  );
};

export default LogIn;
