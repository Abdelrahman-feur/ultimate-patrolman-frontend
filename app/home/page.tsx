/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Slider from "./components/slider";
import Img1 from "./components/img1";
import Link from "next/link";
import Image from "next/image";
import mobile from "@/public/assets/Mobile mockup 3.png";
import labtop from "@/public/assets/homeImages/9.png";
import DuressFunctionCard from "./components/featuresComponents/duressFunctionCard";
import LocationTrackingCard from "./components/featuresComponents/locationTrackingCard";
import DocumentExpiry from "./components/featuresComponents/documentExpiry";
import PatrolManagementCard from "./components/featuresComponents/patrolManagementCard";
import PricingPackages from "./components/pricingPackages/page";
import ContactUs from "./components/contactUs";
import appleApp from "@/public/assets/appleStoreApp.png";
import googleApp from "@/public/assets/googleStoreApp.png";
const HomePage = () => {
  return (
    <>
      <div className=" pt-14 bg-carosuelbg mb-28">
        <p className="text-center text-[40px] text-white font-semibold font-Poppins leading-[48px]">
          Samples of our platform
        </p>
        <p className="text-center text-gray font-Poppins text-2xl font-normal mt-5">
          Mobile App Platform
        </p>
        <Slider />
      </div>
      <div className="mt-28 ml-20 mr-20 flex flex-col md:flex-row justify-between">
        <div className="flex flex-col ">
          <p className="text-white font-Poppins text-5xl font-semibold tracking-tighter">
            Ultimate Patrolman
          </p>
          <p className="mt-10 text-base font-normal leading-loose font-Poppins max-w-xl  text-gray">
            Our system enables customers to run their security services industry
            quickly and efficiently smoothly. We have various features that help
            customers automate their work and avoid overwhelming paperwork. Use
            Ultimate Patrolman's system and make guards' control manageable and
            hassle-free. Send patrol schedules, monitor sign-in and out,
            distribute work schedules, send guards to specific locations in case
            of an emergency, and organize your workload with just a few clicks
          </p>
          <div>
            <Link
              href={"/signup"}
              className=" text-white h-10 w-32 bg-btn-primary rounded-md inline-flex justify-center items-center mt-10"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="flex items-center mt-10 md:mt-0  justify-center  p-12 ">
          <Image
            alt="mockup-mobile"
            className="inline-block rotate-[-30deg]"
            src={mobile}
            width={79}
            height={160}
          />
          <Image
            className="inline-block ml-6"
            alt="mockup-mobile"
            src={labtop}
            width={280}
            height={167.84}
          />
        </div>
      </div>
      <div className="flex flex-col mt-28 ">
        <p className="text-3xl text-white text-center font-semibold font-Poppins">
          Features
        </p>
        <div className="mt-12 grid gap-4 grid-rows-2 grid-cols-2 md:grid-rows-1 md:grid-cols-4 grid-flow-col ml-14 mr-14 shadow ">
          <DuressFunctionCard />
          <LocationTrackingCard />
          <DocumentExpiry />
          <PatrolManagementCard />
        </div>
        <div className="mt-16 text-center text-btn-primary">
          <p>
            <Link href={"/features"}>
              Learn more{" "}
              <svg
                className="inline"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z"
                  fill="#2B6DE7"
                />
              </svg>
            </Link>
          </p>
        </div>
      </div>
      <PricingPackages />
      <ContactUs />
      <h2 className="text-white font-Poppins text-3xl font-semibold leading-10 text-center mt-48">
        Get The App Today!
      </h2>
      <p className="text-nav-color text-center mt-10 text-base leading-5 ">
        Stay on top of all fixtures, scores, venue changes and more!
      </p>
      <div className="text-center mt-14 mb-48">
        <Image
          src={appleApp}
          alt="appleIcon"
          className="border inline-block m-auto"
        />
        <Image
          src={googleApp}
          alt="appleIcon"
          className="border inline-block m-auto"
        />
      </div>
    </>
  );
};

export default HomePage;
