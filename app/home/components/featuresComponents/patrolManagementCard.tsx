/* eslint-disable react/no-unescaped-entities */
import React from "react";
import classes from "./features.module.css";

const PatrolManagementCard = () => {
  return (
    <div className={classes.shadow}>
      <svg
        className="mt-10"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" width="64" height="64" rx="6" fill="#0E1422" />
        <g clipPath="url(#clip0_210_211)">
          <path
            d="M32.5 43.25H13.75V18.25H36.25L38.75 15.75H51.25V32"
            stroke="#C8C8C9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M43.75 50.75C47.8921 50.75 51.25 47.3921 51.25 43.25C51.25 39.1079 47.8921 35.75 43.75 35.75C39.6079 35.75 36.25 39.1079 36.25 43.25C36.25 47.3921 39.6079 50.75 43.75 50.75Z"
            stroke="#C8C8C9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M43.75 39.5V43.25H40"
            stroke="#C8C8C9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
          <path
            d="M13.75 18.25V13.25H36.25L38.75 15.75L36.25 18.25H13.75Z"
            stroke="#C8C8C9"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_210_211">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(12.5 12)"
            />
          </clipPath>
        </defs>
      </svg>
      <p className="text-lg font-medium text-white mt-12">Patrol Management</p>
      <p className="text-center font-Poppins text-base font-normal leading-7 text-neutral-400 mt-6 mb-8">
        Manage guards' locations and timings. Check the logins and outs.
        Distribute guards on timed patrols.
      </p>
    </div>
  );
};

export default PatrolManagementCard;
