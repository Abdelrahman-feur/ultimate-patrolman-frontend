import Link from "next/link";
import React from "react";
import Package1 from "./components/package1";
import Package2 from "./components/package2";
import Package3 from "./components/package3";

const Package = () => {
  return (
    <>
      <h2 className="font-Poppins text-3xl text-white font-semibold leading-10">
        Packages
      </h2>
      <p className="text-base font-normal leading-8 tracking-wide text-neutral-500">
        There are three types of Package
      </p>
      <div className="grid grid-rows-3 gap-8 grid-cols-1 mt-9">
        <div>
          <Package1 />
        </div>
        <div>
          <Package2 />
        </div>
        <div className=" -mt-20 md:mt-0">
          <Package3 />
        </div>
      </div>
    </>
  );
};

export default Package;
