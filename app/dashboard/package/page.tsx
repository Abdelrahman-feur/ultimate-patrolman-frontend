import Link from "next/link";
import React from "react";

const Package = () => {
  return (
    <>
      <h2 className="font-Poppins text-3xl text-white font-semibold leading-10">
        Packages
      </h2>
      <p className="text-base font-normal leading-8 tracking-wide text-neutral-500">
        There are three types of Package
      </p>
      <div className="grid grid-rows-3 grid-cols-1 mt-9">
        <div className="flex justify-start  pr-20  border rounded-lg border-neutral-700 h-fit ">
          <div className="text-lg inline-flex items-center pl-16 justify-end h-64 font-medium text-white bg-btn-primary w-10  ">
            <p className="  block text-center w-auto -rotate-90 ">package 1</p>
          </div>
          <div className="flex justify-evenly  w-full ">
            <div className=" mt-8">
              <p className=" ">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                Minor package - Patrols Only
              </p>
              <p className=" mt-4">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                8.99/user/month{" "}
              </p>
              <p className=" mt-4">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                Rostering
              </p>
              <p className=" mt-4">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                Time sheets
              </p>
              <p className=" mt-4">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                Duress
              </p>
            </div>
            <div className=" mt-8">
              <p className=" ">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                Licenses and document management
              </p>
              <p className=" mt-4">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                Full patrol management
              </p>
              <p className=" mt-4">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                Automated run sheet
              </p>
              <p className=" mt-4">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                Alarm Response
              </p>
              <p className=" mt-4">
                <svg
                  className="inline mr-4"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.00016 16.17L4.83016 12L3.41016 13.41L9.00016 19L21.0002 7.00003L19.5902 5.59003L9.00016 16.17Z"
                    fill="#4FC646"
                  />
                </svg>
                Location management
              </p>
            </div>
            <div className=" mt-8 flex justify-center items-center text-btn-primary ">
              {" "}
              <Link href={"#"} className="underline hover:no-underline">
                Edit now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Package;
