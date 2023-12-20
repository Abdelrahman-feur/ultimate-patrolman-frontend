import React from "react";
import Icons from "./icons";

const BeneathFooter = () => {
  return (
    <footer className="flex flex-wrap w-100 bg-footer-bg p-16  space-x-44 border-black text-white">
      <div className="flex space-x-4">
        <span> Follow Our Social</span>
        <Icons />
      </div>
      <div className=" flex-wrap">
        2023 All Rights Reserved . By Feur Media House
      </div>
    </footer>
  );
};

export default BeneathFooter;
