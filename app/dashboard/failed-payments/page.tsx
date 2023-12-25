"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useState } from "react";
import FailedAccount from "./components/failedAccount";
import { EmailTemplate } from "@/app/dashboard/failed-payments/email/email-tempelate";

const FailedPayment = () => {
  const router = useRouter();

  const [company, setCompany] = useState([
    {
      id: 125,
      companyName: "company4",
      ContactPerson: "Khaled Ahmed Ali",
      email: "Khalid@gmail.com",
      value: "200$",
    },
    {
      id: 126,
      companyName: "company5",
      ContactPerson: "Khaled Ahmed Ali",
      email: "Khalid2@gmail.com",
      value: "200$",
    },
    {
      id: 127,
      companyName: "company6",
      ContactPerson: "Khaled Ahmed Ali",
      email: "Khalid3@gmail.com",
      value: "200$",
    },
    {
      id: 128,
      companyName: "company7",
      ContactPerson: "Khaled kareem",
      email: "Khalid4@gmail.com",
      value: "200$",
    },
  ]);

  const handleRemoveCompany = (id: any) => {
    const newCompany = company.filter((company) => {
      if (company.id !== id) return company;
    });

    setCompany(newCompany);
  };
  return (
    <>
      <div className="flex items-center space-x-32">
        <p
          className="text-btn-primary text-lg cursor-pointer "
          onClick={() => router.push("/dashboard")}
        >
          <span>
            <svg
              className="inline"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="arrow_back 1">
                <g id="Group">
                  <g id="Group_2">
                    <path
                      id="Vector"
                      d="M26.6663 14.6667H10.4397L17.893 7.21334L15.9997 5.33334L5.33301 16L15.9997 26.6667L17.8797 24.7867L10.4397 17.3333H26.6663V14.6667Z"
                      fill="#2B6DE7"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </span>{" "}
          <span className="underline hover:no-underline font-semibold leading-6">
            Back to dashboard
          </span>
        </p>
        <h2 className="font-Poppins text-3xl font-semibold text-white">
          Accounts with failed payments{" "}
        </h2>
      </div>

      <table className=" w-full mt-10 border-separate border-spacing-y-5  text-center max-w-full ">
        <thead>
          <tr>
            <th className="text-white text-lg leading-6 font-normal">Id</th>
            <th className="text-white text-lg leading-6 font-normal">
              Company Name
            </th>
            <th className="text-white text-lg leading-6 font-normal">
              Contact Pehson
            </th>
            <th className="text-white text-lg leading-6 font-normal">Email</th>
            <th className="text-white text-lg leading-6 font-normal">Value</th>
            <th className="text-white text-lg leading-6 font-normal">
              More Option
            </th>
          </tr>
        </thead>
        <tbody>
          {company.map((company) => (
            <FailedAccount
              key={company.id}
              company={company}
              onRemoveCompany={handleRemoveCompany}
            />
          ))}
        </tbody>
      </table>

      <div className="mt-10 text-center">
        <button
          onClick={() => router.push("/dashboard")}
          className=" btn hover:bg-footer-bg w-80 bg-btn-primary h-12 rounded-lg text-white font-Poppins text-base font-semibold leading-7 tracking-tight"
        >
          Back to dashboard
        </button>
      </div>
    </>
  );
};

export default FailedPayment;
