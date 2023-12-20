/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PricingHeader from "./components/header";
import PricingItem from "./components/pricingItem";
import Link from "next/link";
import classes from "../../home.module.css";
const package1 = [
  "Minor package - Patrols Only",
  "8.99/user/month",
  "Full patrol management",
  "Automated run sheet",
  "Rostering",
  "Time sheets",
  "Licenses and document management",
  "Duress",
  "Alarm Response",
  "Location management",
];
const package2 = [
  "Medium - Static Guards Only",
  "7.99/user/month",
  "Roasting",
  "Sign in and out",
  "Alarm Response",
  "Location management",
];
const package3 = [
  "All Features – 10.99/user/month",
  "Full patrol management",
  "Static Guards Management",
  "Automated run sheet",
  "Rostering",
  "Time sheets",
  "Licenses and document management",
  "Duress",
  "Alarm Response",
  "Location management",
];
const PricingPackages = () => {
  return (
    <div className="mr-32 ml-32 ">
      <h2 className=" text-center text-white text-3xl font-semibold leading-10 mt-32">
        Pricing
      </h2>
      <p className="mt-6 text-nav-color text-center font-Poppins text-base max-w-4xl  m-auto">
        We do not offer a "one fits all" pricing plan, we understand that
        different customers have different needs, and that is why we have three
        packages for you to choose from:
      </p>
      <div className=" grid grid-row-3 grid-col-1 lg:grid-cols-3 lg:grid-rows-1  gap-10 mt-10">
        <div
          className={`grid grid-row-3 pb-5 gap-y-6 border rounded-lg ${classes.priceBorderColor}`}
        >
          <PricingHeader>package1</PricingHeader>
          <div className="grid grid-row-10 gap-6">
            {package1.map((item, i) => (
              <PricingItem key={i}>{item}</PricingItem>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={"#"}
              className="text-btn-primary text-lg font-semibold "
            >
              Subscribe now
            </Link>
          </div>
        </div>
        <div
          className={`flex flex-col pb-5  border rounded-lg ${classes.priceBorderColor}`}
        >
          <PricingHeader>package2</PricingHeader>
          <div className="grid grid-row-10 gap-y-6  mt-6 mb-56">
            {package2.map((item, i) => (
              <PricingItem key={i}>{item}</PricingItem>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={"#"}
              className="text-btn-primary text-lg font-semibold "
            >
              Subscribe now
            </Link>
          </div>
        </div>
        <div
          className={`grid grid-row-3 pb-5 gap-y-6 border rounded-lg ${classes.priceBorderColor}`}
        >
          <PricingHeader>package 3</PricingHeader>
          <div className="grid grid-row-10 gap-6">
            {package3.map((item, i) => (
              <PricingItem key={i}>{item}</PricingItem>
            ))}
          </div>
          <div className="text-center">
            <Link
              href={"#"}
              className="text-btn-primary text-lg font-semibold "
            >
              Subscribe now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPackages;
