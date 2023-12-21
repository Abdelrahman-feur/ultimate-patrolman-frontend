"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { use, useEffect, useRef, useState } from "react";

const NavigationBar = () => {
  const path = usePathname();
  // const [loggedIn, setloggedIn] = useState(function () {
  //   const current = localStorage.getItem("loggedIn");
  //   return current;
  // });

  // useEffect(() => {
  //   const handleStoragChange = (event: StorageEvent) => {
  //     setloggedIn(localStorage.getItem("loggedIn"));
  //   };
  //   window.addEventListener("storage", handleStoragChange);
  // }, []);
  return (
    <nav className="text-nav-color text-base  font-Poppins space-x-9">
      <Link
        href={"/home"}
        className={`hover:text-white ${
          path === "/home" || path === "/" ? "text-white" : null
        } `}
      >
        Home
      </Link>
      <Link
        href={"/about"}
        className={`hover:text-white ${
          path === "/about" ? "text-white" : null
        } `}
      >
        About
      </Link>
      <Link
        href={"/features"}
        className={`hover:text-white ${
          path === "/features" ? "text-white" : null
        } `}
      >
        Features
      </Link>
      <Link
        href={"/support"}
        className={`hover:text-white ${
          path === "/support" ? "text-white" : null
        } `}
      >
        Support
      </Link>
      <Link
        href={"/contactUs"}
        className={`hover:text-white ${
          path === "/contactUs" ? "text-white" : null
        } `}
      >
        Contact Us
      </Link>
      <Link
        href={"/dashboard"}
        className={`hover:text-white ${
          path === "/dashboard" ? "text-white" : null
        } `}
      >
        dashboard
      </Link>
    </nav>
  );
};

export default NavigationBar;
