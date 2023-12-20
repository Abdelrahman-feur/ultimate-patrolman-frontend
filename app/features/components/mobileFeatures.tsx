import React from "react";
import Images from "./images";
import Image from "next/image";
import appleApp from "../../../public/assets/appleStoreApp.png";
import googleApp from "../../../public/assets/googleStoreApp.png";

const MobileFeatures = (props: any) => {
  return (
    <div className="mt-14 text-center flex-col font-semibold">
      <h6 className="text-white text-3xl">Mobile App</h6>
      <div className="flex flex-wrap mt-16 text-center justify-center space-x-0 space-y-10 lg:space-x-20 lg:space-y-0 h-fit sm:space-y-0 md:space-y-16 lg:space-y-0  ">
        <p className=" flex items-center  featureTextBox  leading-10 text-nav-color   ">
          By using our app your employees will be able to create accounts for
          your guards and help them use the app on their mobiles for easy
          access. The app enables guards to check their roasters, upcoming
          schedules, emergency locations, and much more.
        </p>
        <Images />
      </div>
      <div className=" flex justify-center mt-20 space-x-6">
        <Image src={appleApp} width={190} height={64} alt="Apple-store-icon" />
        <Image src={googleApp} width={190} height={64} alt="Apple-store-icon" />
      </div>
    </div>
  );
};

export default MobileFeatures;
