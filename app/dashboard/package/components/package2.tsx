import Link from "next/link";
import React from "react";
import correct from "@/public/correct.svg";
import Image from "next/image";
import CorrectSVG from "./correctSVG";
import PackageItem from "./packageItem";
const Package2 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start p-0 md:pr-20  border rounded-lg border-neutral-700 h-fit ">
      <div className="text-lg inline-flex items-center p-5 md:p-0 md:pl-16 justify-center md:justify-end h-fit  md:h-64 font-medium rounded-t-lg md:rounded-none md:rounded-l-lg text-white bg-btn-primary w-full md:w-10  ">
        <p className="  block text-center w-auto rotate-0 md:-rotate-90 ">
          package 2
        </p>
      </div>
      <div className=" px-36 md:px-0  flex flex-col  md:flex-row md:justify-evenly  w-full  ">
        <div className=" mt-8 ">
          <PackageItem mt="mt-0"> Medium - Static Guards Only</PackageItem>
          <PackageItem mt="mt-6"> 7.99/user/month</PackageItem>
          <PackageItem mt="mt-6">Roasting</PackageItem>
          <PackageItem mt="mt-6"> Location management</PackageItem>
        </div>
        <div className=" mt-8">
          <PackageItem mt="mt-0"> Sign in and out</PackageItem>
          <PackageItem mt="mt-6"> Alarm Response</PackageItem>
        </div>
        <div className=" mt-8 mb-4 md:mb-0 flex justify-center items-center text-btn-primary ">
          {" "}
          <Link href={"#"} className="underline hover:no-underline">
            Edit now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Package2;
