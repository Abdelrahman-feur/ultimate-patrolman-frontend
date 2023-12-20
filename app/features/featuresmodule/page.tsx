"use client";
import React, { useState } from "react";
import MobileFeatures from "../components/mobileFeatures";
import Image from "next/image";
import boardMockup from "../../../public/assets/Dashboard.png";
const FeaturesModule = () => {
  const [features, setFeatures] = useState("Mobile App");
  return (
    <div className=" ml-20 mr-20 text-center flex flex-col">
      <div className="FeaturesHeadBox font-Poppins mt-24 flex flex-col space-y-8 tracking-tight ">
        {" "}
        <p className="text-white text  text-4xl font-normal ">
          Features Module
        </p>{" "}
        <p className="text-base text-nav-color">
          Start your journey with us now. Discover our modules.
        </p>
      </div>
      <MobileFeatures features={features} />
      <div className="mt-24 space-y-10 flex flex-col">
        <p className="text-white font-Poppins text-3xl font-semibold tracking-tighter">
          Desktop
        </p>
        <div className="boardwithtext flex flex-wrap items-center justify-center ">
          <Image
            alt="dahboardMockup"
            src={boardMockup}
            height={280}
            width={467}
          />
          <p className="featureTextBox font-Poppins text-lg leading-10 tracking-tight text-nav-color text-left ">
            This is a Custom created software to help companies manage their
            workforce and distribute assignments. No more overwhelming
            paperwork. Use this module to send guards any work information you
            want them to see on the spot.
          </p>
        </div>
      </div>
      <div className="mt-16 mb-20">
        <p className="text-btn-primary tracking-tight text-2xl  font-normal space-x-0 lg:space-y-0 lg:space-x-48  text-center">
          <a href="#">MAC users click here to download</a>
          <a href="#">Windows users click here to download</a>
        </p>
      </div>
    </div>
  );
};

export default FeaturesModule;
