"use client";
import React from "react";
import SignupForm from "./components/signupForm";

const SignUp = () => {
  return (
    <>
      <div className="text-4xl mt-12 font-semibold font-Poppins text-white min-h-full text-center ">
        Sign Up
      </div>
      <div className="text-center my-4 text-gray text-l">
        sign in with your email & password{" "}
      </div>
      <div className="text-center">
        <SignupForm />
      </div>
    </>
  );
};

export default SignUp;
