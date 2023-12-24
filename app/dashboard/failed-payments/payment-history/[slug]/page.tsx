"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import back from "@/public/back.svg";
import Image from "next/image";
const HistoryPayment = () => {
  const searchParams = useSearchParams();

  return (
    <>
      <div className="flex">
        <Link href={"/dashboard/failed-payments"}>
          <Image className="inline" src={back} alt="back-arrow" />
          <span className="ml-4 text-btn-primary underline hover:no-underline text-lg font-semibold leading-6 tracking-wide ">
            Back to Failed payment
          </span>
        </Link>
        <h2 className="text-white text-4xl font-semibold leading-10 mx-32">
          History payment
        </h2>
      </div>
      {/* <div>The Requested id is {searchParams.get("id")} </div> */}
    </>
  );
};

export default HistoryPayment;
