"use Client";
import { ClientRequest } from "http";
import Link from "next/link";
import React from "react";
import CompanyLogo from "./components/companyLogo";
import NavigationBar from "./components/navigationBar";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";

const Header = () => {
  return (
    <>
      <header className="mt-6 flex justify-around items-center flex-wrap ">
        <CompanyLogo />
        <NavigationBar />
        <div className="w-72 h-10 space-x-6 text-base  font-Poppins">
          <SignUp />
          <SignIn />
        </div>
      </header>
    </>
  );
};

export default Header;
