import React from "react";
import classes from "./main.module.css";
import Link from "next/link";
const SuperAdminDashboard = () => {
  return (
    <div className="mt-16  grid-col-1 grid sm:grid-cols-3 gap-y-20 sm:gap-y-5 gap-5">
      <div className="flex flex-col justify-evenly sm:justify-between space-y-20 items-center  ">
        <div
          className={`${classes.cardContainer} w-full justify-around flex flex-col rounded-2xl h-56  text-center `}
        >
          <div className="mt-2 max-w-full ">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <p className=" text-white font-Poppins text-2xl md:text-4xl font-semibold leading-10">
            2500
          </p>
          <p className=" text-lg md:text-2xl  font-semibold leading-8 text-white">
            Outgoing Charges
          </p>
        </div>
        <div
          className={`${classes.cardContainer} w-full justify-around flex flex-col rounded-2xl h-56  text-center `}
        >
          <div className="mt-2 max-w-full ">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <p className=" text-red font-semibold text-2xl md:text-4xl leading-10 ">
            100
          </p>
          <p className=" text-lg md:text-xl font-semibold leading-8 text-white">
            Failed Payments
          </p>
          <Link
            href={"dashboard/failed-payments"}
            className="text-xs font-semibold leading-4 tracking-wide underline text-btn-primary hover:no-underline"
          >
            View Details{" "}
          </Link>
        </div>
      </div>
      <div className="  flex flex-col justify-center">
        <div
          className={`${classes.cardContainer} w-full justify-around  h-72 flex flex-col rounded-2xl   text-center `}
        >
          <div className="mt-2 max-w-full ">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <p className=" text-correct font-Poppins text-2xl md:text-4xl font-semibold leading-10">
            15 Tickets
          </p>
          <p className=" text-lg md:text-xl  font-semibold leading-8 tracking-wide text-white">
            Issues and Tickets per week
          </p>
          <div className="  flex justify-around  text-center px-4">
            {" "}
            <Link
              href={"#"}
              className="text-xs md:text-base leading-6 text-btn-primary underline tracking-wide hover:no-underline"
            >
              View Details
            </Link>{" "}
            <Link
              href={"#"}
              className="text-xs md:text-base leading-6 text-btn-primary underline tracking-wide hover:no-underline"
            >
              Raise a Ticket{" "}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between space-y-20 items-center ">
        <div
          className={`${classes.cardContainer} w-full justify-around flex flex-col rounded-2xl h-56  text-center `}
        >
          <div className="mt-2 max-w-full ">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <p className=" text-white font-Poppins text-2xl md:text-4xl font-semibold leading-10">
            24,500
          </p>
          <p className=" text-lg md:text-2xl  font-semibold leading-8 text-white">
            Income per Month
          </p>
        </div>
        <div
          className={`${classes.cardContainer} w-full justify-around flex flex-col rounded-2xl h-56  text-center `}
        >
          <div className="mt-2 max-w-full ">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <p className=" text-white font-semibold text-2xl md:text-4xl leading-10 ">
            1500
          </p>
          <p className=" md:text-lg text-xl font-semibold leading-8 text-white">
            Number of Users
          </p>
          <Link
            href={"#"}
            className="text-xs font-semibold leading-4 tracking-wide underline text-btn-primary hover:no-underline"
          >
            View Details{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
