"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React from "react";

const FailedPayment = () => {
  const router = useRouter();
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
          <tr className="bg-cardbg border h-16 text-neutral-400">
            <td>125</td>
            <td>Company4</td>
            <td>Khalid Ali</td>
            <td>khalid@gmail.com</td>
            <td className="text-white">200$</td>
            <td>
              {" "}
              <details className="dropdown hover:bg-none w-full">
                <summary className="m-1 btn bg-cardbg border-none hover:bg-cardbg">
                  <svg
                    width="4"
                    height="16"
                    viewBox="0 0 4 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"
                      fill="#A7A7A7"
                    />
                  </svg>
                </summary>
                <ul className="text-btn-primary p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full">
                  <li className="">
                    <a>Send Email</a>
                  </li>
                  <li>
                    <a>History Payment</a>
                  </li>
                  <li>
                    <a className="text-red">Remove</a>
                  </li>
                </ul>
              </details>
            </td>
          </tr>
          <tr className="bg-cardbg border h-16 text-neutral-400">
            <td>125</td>
            <td>Company4</td>
            <td>Khalid Ali</td>
            <td>khalid@gmail.com</td>
            <td className="text-white">200$</td>
            <td>
              <details className="dropdown hover:bg-none">
                <summary className="m-1 btn bg-cardbg border-none hover:bg-cardbg">
                  :
                </summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                  <li>
                    <a>Item 1</a>
                  </li>
                  <li>
                    <a>Item 2</a>
                  </li>
                </ul>
              </details>
            </td>
          </tr>
          <tr className="bg-cardbg border h-16 text-neutral-400">
            <td>125</td>
            <td>Company4</td>
            <td>Khalid Ali</td>
            <td>khalid@gmail.com</td>
            <td className="text-white">200$</td>
            <td>:</td>
          </tr>
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
