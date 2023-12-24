import React from "react";
import CorrectSVG from "./correctSVG";
import Link from "next/link";
import PackageItem from "./packageItem";

const Package3 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-start p-0 md:pr-20  border rounded-lg border-neutral-700 h-fit ">
      <div className="text-lg inline-flex items-center p-5 md:p-0 md:pl-16 justify-center md:justify-end h-fit  md:h-64 font-medium rounded-t-lg md:rounded-none md:rounded-l-lg text-white bg-btn-primary w-full md:w-10  ">
        <p className="  block text-center w-auto rotate-0 md:-rotate-90 ">
          package 3
        </p>
      </div>
      <div className="px-36 md:px-0  flex flex-col  md:flex-row md:justify-evenly  w-full   ">
        <div className=" mt-8 ">
          <PackageItem mt="mt-0">All Features – 10.99/user/month</PackageItem>
          <PackageItem mt="mt-4">Full patrol management</PackageItem>
          <PackageItem mt="mt-4"> Rostering</PackageItem>
          <PackageItem mt="mt-4"> Time sheets </PackageItem>
          <PackageItem mt="mt-4"> Location management </PackageItem>
        </div>
        <div className=" mt-8">
          <PackageItem mt="mt-0">Automated run sheet</PackageItem>
          <PackageItem mt="mt-4"> Static Guards Management</PackageItem>
          <PackageItem mt="mt-4"> Licenses and document management</PackageItem>
          <PackageItem mt="mt-4"> Duress</PackageItem>
          <PackageItem mt="mt-4"> Alarm Response</PackageItem>
        </div>
        <div className=" mt-8 mb-4 md:mb-0 flex justify-center items-center text-btn-primary  text-center ">
          {" "}
          <Link href={"#"} className="underline hover:no-underline">
            Edit now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Package3;
