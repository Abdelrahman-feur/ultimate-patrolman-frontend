"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import back from "@/public/back.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import HistoryItem from "./components/historyItem";
const HistoryPayment = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const companyId = searchParams.get("id");
  const companyName = searchParams.get("companyName");
  const [paymentHistory, setPaymentHistory] = useState([
    {
      id: 125,
      date: "05/08/2023",
      delayPerDays: 10,
      status: "failed",
      value: "200$",
    },
    {
      id: 126,
      date: "06/08/2023",
      delayPerDays: 20,
      status: "Successful",
      value: "200$",
    },
    {
      id: 127,
      date: "07/08/2023",
      delayPerDays: 20,
      status: "failed",
      value: "200$",
    },
    {
      id: 128,
      date: "20/08/2023",
      delayPerDays: 5,
      status: "successful",
      value: "200$",
    },
  ]);

  return (
    <>
      <div className="flex space-x-48 border">
        <Link href={"/dashboard/failed-payments"}>
          <Image className="inline" src={back} alt="back-arrow" />
          <span className=" text-btn-primary underline hover:no-underline text-lg font-semibold leading-6 tracking-wide ">
            Back to Failed payment
          </span>
        </Link>
        <h2 className="text-white text-4xl font-semibold leading-10  font-Poppins ">
          History payment
        </h2>
      </div>
      <p className="text-white font-Poppins text-xl font-semibold leading-7 text-center mt-8 ">
        {companyName}
      </p>
      <table className=" w-full mt-10 border-separate border-spacing-y-5  text-center max-w-full ">
        <thead>
          <tr>
            <th className="text-white text-lg leading-6 font-normal">
              Payment #
            </th>
            <th className="text-white text-lg leading-6 font-normal">
              Payment date
            </th>
            <th className="text-white text-lg leading-6 font-normal">
              Delay per days
            </th>
            <th className="text-white text-lg leading-6 font-normal">Status</th>
            <th className="text-white text-lg leading-6 font-normal">Value</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map((company) => (
            <HistoryItem key={company.id} paymentHistory={company} />
          ))}
        </tbody>
      </table>
      <button
        onClick={() => router.push("/dashboard/failed-payments")}
        className=" btn m-auto text-center border block w-80 h-12 font-Poppins text-base font-semibold leading-7 tracking-tight rounded-lg text-white bg-btn-primary "
      >
        Back to Failed Payment{" "}
      </button>
      {/* <div>The Requested id is {searchParams.get("id")} </div> */}
    </>
  );
};

export default HistoryPayment;
