import React from "react";
import Header from "./components/header";
import Cards from "./components/card";
import MobileFeatures from "./components/mobileFeatures";
import Image from "next/image";
import labtop from "../../public/assets/labtop.png";
import Link from "next/link";
const Features = () => {
  return (
    <>
      <div className="m-20 text-center flex flex-col">
        <Header />
        <Cards />
        <div className=" mt-20 featureColor text-3xl font-normal leading-10">
          <p>Start your journey with us now</p>
          <p>
            Discover{" "}
            <span className="text-white">
              {" "}
              <Link href={"/features/featuresmodule"}>our modules</Link>{" "}
            </span>
            .{" "}
          </p>
        </div>
        <MobileFeatures />
        <div className="mt-20 flex flex-col ">
          <p className="text-white text-3xl font-semibold">Cloud Based</p>
          <div className=" flex  flex-col justify-center lg:flex-row  mt-16 items-center  lg:justify-between ">
            <div className="labtopContainer  flex justify-center items-center ">
              <Image src={labtop} alt="labtop" height={641} width={384} />
            </div>
            <div className="featureTextBox flex justify-center items-center text-2xl text-nav-color font-normal leading-10 text-left  max-w-full">
              This is cloud-based software that can be accessed through a web
              browse@r software to help companies manage their workforce and
              distribute assignments. No more overwhelming paperwork. Use this
              module to send guards any work information you want them to see on
              the spot.
            </div>
          </div>
        </div>
        <div className="mt-12 mb-12">
          <p className="text-btn-primary tracking-tight text-2xl  font-normal space-x-0 lg:space-y-0 lg:space-x-24  text-center">
            <a href="#">MAC users click here to download  </a>
            <a href="#">Windows users click here to download </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Features;
