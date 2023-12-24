import React from "react";

const Reports = () => {
  return (
    <>
      <h2 className="text-white text-4xl font-semibold leading-8 tracking-wide mt-4">
        Reports
      </h2>
      <p className="text-nav-color font-normal text-xl mt-10 leading-8">
        There are three types of reports
      </p>
      <div className="  flex flex-col md:flex-row items-center space-y-6 md:space-y-0 space-x-0 md:space-x-6 justify-center mt-12">
        <div className=" cursor-pointer animation flex justify-center items-center bg-cardbg text-white text-2xl font-bold tracking-wide rounded-2xl w-72 h-72 ">
          <p>Billing</p>
        </div>
        <div className="flex justify-center items-center  bg-cardbg text-white text-2xl font-bold tracking-wide rounded-2xl w-72 h-72 ">
          <p className=" text-center">Failed Payments</p>
        </div>
        <div className="flex justify-center items-center bg-cardbg text-white text-2xl font-bold tracking-wide rounded-2xl w-72 h-72 ">
          <p>Renewals </p>
        </div>
      </div>
    </>
  );
};

export default Reports;
