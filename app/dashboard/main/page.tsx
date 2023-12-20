import React from "react";
import classes from "./main.module.css";
const MainDash = () => {
  return (
    <>
      <div
        className={` font-Poppins text-3xl font-semibold leading-10 text-white`}
      >
        Dashoard
      </div>
      <div className="mt-10 grid grid-cols-3 grid-rows-4 gap-6 grid-flow-row">
        <div
          className={`  ${classes.cardContainer} items-center rounded-2xl flex flex-col`}
        >
          <div className="mt-2 max-w-full ">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <div className="mt-6 text-correct text-3xl lg:text-5xl leading-[67.20px] tracking-tight">
            2400
          </div>
          <div className="text-center my-6 text-base lg:text-2xl font-medium leading-10 text-white">
            Alarm Responses{" "}
          </div>
        </div>
        <div
          className={`${classes.cardContainer} items-center rounded-2xl flex flex-col`}
        >
          <div className="mt-2 max-w-full">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <div className="mt-6 text-white text-3xl lg:text-5xl leading-[67.20px] tracking-tight">
            1500
          </div>
          <div className=" text-center my-6 text-2xl font-medium leading-10 text-white">
            Outgoing Charges
          </div>
        </div>
        <div
          className={`  ${classes.cardContainer} items-center rounded-2xl flex flex-col`}
        >
          <div className="mt-2 max-w-full ">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <div className=" mt-6 text-red  text-3xl lg:text-5xl leading-[67.20px] tracking-tight">
            100
          </div>
          <div className="text-center my-6 text-2xl font-medium leading-10 text-white">
            Missed Charges
          </div>
        </div>
        <div
          className={` ${classes.cardContainer} rounded-2xl col-span-3 row-span-2  flex flex-wrap lg:flex-nowrap  `}
        >
          <div className="flex flex-col mt-8 ml-8">
            <p className="mt-8 text-5xl font-normal leading-[64px] max-w-md">
              Documents Are About to{" "}
              <span className="text-red font-medium">Expire</span>
            </p>
            <p className="mt-10 text-nav-color text-lg leading-6 tracking-wide">
              Will find any drives or security was expiring
            </p>
            <button className=" text-center h-12 rounded-lg bg-btn-primary text-white mt-16  w-44 text-base font-medium  active:bg-footer-bg hover:bg-footer-bg transform transition duration-500	">
              View Documents
            </button>
          </div>
          <div className=" w-2/4 flex justify-center items-center ">
            <svg
              width="257"
              height="246"
              viewBox="0 0 257 246"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M239.52 229.198C239.52 238.478 186.675 246 121.487 246C56.2999 246 3.45508 238.478 3.45508 229.198C3.45508 219.918 56.2999 212.396 121.487 212.396C186.675 212.396 239.52 219.918 239.52 229.198Z"
                fill="url(#paint0_radial_423_756)"
              />
              <path
                d="M253.829 112.157L246.7 106.792C243.657 104.503 239.531 104.401 236.375 106.507L146.615 166.557C143.51 168.634 142.014 172.43 142.841 176.088L144.779 184.603C145.385 187.114 147.165 189.18 149.556 190.127C151.948 191.075 154.634 190.789 156.782 189.368L193.011 165.307C197.391 171.984 206.345 173.788 213.044 169.348C219.719 164.908 221.601 155.902 217.237 149.219L253.466 125.152C255.603 123.725 256.923 121.345 256.997 118.765C257.071 116.174 255.886 113.703 253.829 112.157Z"
                fill="#823D3B"
              />
              <path
                d="M147.89 155.491L226.457 104.555C228.52 103.225 229.84 101.016 230.044 98.5621C230.248 96.1137 229.319 93.6996 227.522 92.0388C221.816 86.7598 214.228 79.0608 209.343 71.419C196.728 51.6837 172.485 43.6995 151.148 50.8505C157.348 68.0118 155.807 87.3133 146.558 103.208C142.54 110.09 139.469 119.524 137.593 126.236C136.425 130.402 133.847 134.038 130.401 136.537C133.297 142.336 134.963 147.164 136.051 150.999C136.737 153.419 138.517 155.365 140.846 156.25C143.175 157.123 145.793 156.843 147.89 155.491Z"
                fill="#823D3B"
              />
              <path
                d="M19.1527 83.912C16.4666 82.3025 13.0551 82.6107 10.6976 84.6824L2.96213 91.4967C0.871005 93.283 -0.222728 95.9825 0.0379542 98.7334C0.292969 101.478 1.85139 103.927 4.23153 105.297L44.4389 128.45C40.2283 135.864 42.8408 145.326 50.2646 149.607C52.7071 151.011 55.3592 151.684 57.9887 151.684C63.327 151.684 68.4896 148.91 71.3288 143.922L111.536 167.088C112.823 167.824 114.262 168.206 115.713 168.206C116.931 168.206 118.15 167.932 119.283 167.402C121.759 166.22 122.729 164.194 123.987 161.192C124.616 159.686 126.191 155.023 126.191 155.023C127.358 151.747 126.061 148.1 123.097 146.319L19.1527 83.912Z"
                fill="#823D3B"
              />
              <path
                d="M141.634 47.0667L145.685 39.9442C148.87 34.3455 149.686 27.8394 148.009 21.6186C146.32 15.3978 142.336 10.2158 136.794 7.02548L130.107 3.17887C126.503 1.09577 122.383 0 118.24 0C109.66 0 101.687 4.65702 97.431 12.1505L93.2147 19.5755C75.3184 20.1747 58.085 29.6657 48.4511 46.1935C41.7924 57.6192 35.5134 64.4791 30.7531 68.9079C28.798 70.7227 27.8062 73.3651 28.1009 76.0361C28.3843 78.7013 29.9087 81.0755 32.2095 82.4338L118.201 133.256C119.51 134.032 120.983 134.42 122.462 134.42C123.522 134.42 124.587 134.22 125.596 133.809C128.01 132.828 129.852 130.773 130.555 128.256C132.793 120.226 136.42 109.246 141.294 100.891C151.239 83.8092 150.689 63.3263 141.634 47.0667ZM130.368 31.1267L129.648 32.4051C127.296 30.3962 124.786 28.5299 122.043 26.9034C118.796 24.9858 115.424 23.4563 111.995 22.2978L112.738 20.9851C113.877 18.9876 116.087 17.8291 118.314 17.8234C119.357 17.8234 120.405 18.0745 121.351 18.6224L128.033 22.469C129.484 23.3079 130.543 24.6719 130.985 26.3156C131.422 27.9364 131.201 29.6485 130.368 31.1267Z"
                fill="#823D3B"
              />
              <defs>
                <radialGradient
                  id="paint0_radial_423_756"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(120.281 229.211) scale(114.205 12.3731)"
                >
                  <stop stopColor="#797979" />
                  <stop offset="0.2984" stopColor="#B6B6B6" />
                  <stop offset="0.5793" stopColor="#BABABA" stopOpacity="0.5" />
                  <stop offset="0.9843" stopColor="#F2F2F2" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div
          className={`  ${classes.cardContainer} items-center rounded-2xl flex flex-col`}
        >
          <div className="mt-2 max-w-full">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <div className="mt-6 text-correct  text-2xl lg:text-4xl leading-[67.20px] tracking-tight">
            24500
          </div>
          <div className="text-center my-6 text-2xl font-medium leading-10 text-white">
            Income Per Month
          </div>
        </div>
        <div
          className={`  ${classes.cardContainer} items-center rounded-2xl flex flex-col`}
        >
          <div className="mt-2  text-center max-w-full ">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer "
            />
          </div>
          <div className="mt-6 text-white  text-2xl lg:text-4xl leading-[67.20px] tracking-tight">
            24500
          </div>
          <div className="text-center my-6 text-2xl font-medium leading-10 text-white">
            Income Per Month
          </div>
        </div>
        <div
          className={`  ${classes.cardContainer} items-center rounded-2xl flex flex-col`}
        >
          <div className="mt-2 max-w-full ">
            <input
              type="month"
              className="rounded-lg max-w-full cursor-pointer"
            />
          </div>
          <div className="mt-6 text-red  text-2xl lg:text-4xl leading-[67.20px] tracking-tight">
            24500
          </div>
          <div className="text-center my-6 text-2xl font-medium leading-10 text-white">
            Income Per Month
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDash;
