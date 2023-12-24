"use Client";
import { ClientRequest } from "http";
import Link from "next/link";
import React, { useContext } from "react";
import CompanyLogo from "./components/companyLogo";
import NavigationBar from "./components/navigationBar";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import { LoginStatusContext } from "../layout";
import { useRouter } from "next/navigation";
const Header = () => {
  const { loggedIn, setLoggedIn } = useContext(LoginStatusContext);

  const router = useRouter();

  const handleLogOut = function () {
    setLoggedIn(false);
    localStorage.setItem("loggedIn", "false");
    router.push("/home");
  };
  if (loggedIn) {
    return (
      <>
        <header className=" w-9/12  m-auto  text-right">
          <div className="text-right pt-10 ">
            <button onClick={handleLogOut} className=" text-nav-color">
              <svg
                className="inline"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 7L15.59 8.41L18.17 11H8V13H18.17L15.59 15.58L17 17L22 12L17 7ZM4 5H12V3H4C2.9 3 2 3.9 2 5V19C2 20.1 2.9 21 4 21H12V19H4V5Z"
                  fill="#777777"
                />
              </svg>
              {"  "}
              LogOut
            </button>
          </div>
        </header>
      </>
    );
  }
  return (
    <>
      <header className="py-9 flex justify-around items-center flex-wrap ">
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
