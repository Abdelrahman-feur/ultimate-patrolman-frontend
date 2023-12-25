"use client";
import React, { useState } from "react";
import backArrow from "@/public/back.svg";
import { ToggleSwitch } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
const Support = () => {
  const [switchMe, setSwitch] = useState(true);
  return (
    <>
      <div className="  space-x-72 flex text-center items-center pt-8">
        <Link
          href={"#"}
          className=" text-btn-primary text-lg font-semibold leading-6"
        >
          <Image className="mr-4 inline" src={backArrow} alt="back-arrow" />
          <span>Back to Employees </span>
        </Link>
        <h2 className="font-Poppins text-4xl font-semibold leading-10 text-white">
          Support
        </h2>
      </div>
      <p className="text-gray text-center mt-4 ">
        There are three types of Package
      </p>
      <div className="flex border space-x-16 items-center ">
        <div className="flex flex-col">
          <h4 className="font-Poppins text-white text-xl font-semibold leading-7">
            Access Customer
          </h4>
          <p className="text-gray text-sm font-normal leading-5 tracking-wide mt-4">
            Can Access all data about customers
          </p>
        </div>
        <div>
          <input
            type="checkbox"
            className="toggle [--tglbg:yellow] bg-blue-500 hover:bg-blue-700 border-blue-500"
            checked
          />
        </div>
      </div>
    </>
  );
};

export default Support;
