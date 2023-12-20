import React from "react";
import classes from "../home.module.css";
const ContactUs = () => {
  return (
    <div className={`${classes.contact} mt-32 pt-12 pb-16`}>
      <h2 className="text-white font-Poppins text-3xl font-semibold leading-10 text-center">
        Contact Us
      </h2>
      <div
        className="flex flex-col sm:flex-row m-auto gap-5 sm:gap-16 md:gap-28  justify-center mt-12
      "
      >
        <div className="flex flex-col space-y-2 items-center">
          <svg
            width="65"
            height="66"
            viewBox="0 0 65 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.5 35.7085C36.9873 35.7085 40.625 32.0708 40.625 27.5835C40.625 23.0962 36.9873 19.4585 32.5 19.4585C28.0127 19.4585 24.375 23.0962 24.375 27.5835C24.375 32.0708 28.0127 35.7085 32.5 35.7085Z"
              stroke="#B2C8F1"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32.5 5.91675C26.7537 5.91675 21.2427 8.19948 17.1794 12.2628C13.1161 16.3261 10.8334 21.8371 10.8334 27.5834C10.8334 32.7076 11.9221 36.0605 14.8959 39.7709L32.5 60.0834L50.1042 39.7709C53.078 36.0605 54.1667 32.7076 54.1667 27.5834C54.1667 21.8371 51.884 16.3261 47.8207 12.2628C43.7574 8.19948 38.2464 5.91675 32.5 5.91675V5.91675Z"
              stroke="#B2C8F1"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className=" text-center font-Poppins text-sm font-semibold leading-7 text-white">
            Find Us
          </p>
          <p className={`${classes.contactText} text-base text-center`}>
            Zamalek, Cairo, Egypt
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <svg
            width="65"
            height="66"
            viewBox="0 0 65 66"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_39_198)">
              <path
                d="M57.7778 11.3333H7.2222C6.26447 11.3333 5.34597 11.7137 4.66875 12.3909C3.99154 13.0681 3.61108 13.9866 3.61108 14.9444V51.0555C3.61108 52.0132 3.99154 52.9317 4.66875 53.6089C5.34597 54.2861 6.26447 54.6666 7.2222 54.6666H57.7778C58.7355 54.6666 59.654 54.2861 60.3312 53.6089C61.0084 52.9317 61.3889 52.0132 61.3889 51.0555V14.9444C61.3889 13.9866 61.0084 13.0681 60.3312 12.3909C59.654 11.7137 58.7355 11.3333 57.7778 11.3333ZM54.9972 51.0555H10.2194L22.8583 37.9833L20.2583 35.4735L7.2222 48.961V17.6888L29.6653 40.0235C30.3418 40.6961 31.2571 41.0736 32.2111 41.0736C33.1651 41.0736 34.0803 40.6961 34.7569 40.0235L57.7778 17.1291V48.7263L44.4889 35.4374L41.943 37.9833L54.9972 51.0555ZM9.58747 14.9444H54.8527L32.2111 37.4596L9.58747 14.9444Z"
                fill="#B2C8F1"
              />
            </g>
            <defs>
              <clipPath id="clip0_39_198">
                <rect
                  width="65"
                  height="65"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className=" text-center font-Poppins text-sm font-semibold leading-7 text-white">
            Mail
          </p>
          <p className={`${classes.contactText} text-base`}>
            ipay.management@hotmail.com
          </p>
        </div>
        <div className="flex flex-col space-y-2 items-center">
          <svg
            width="81"
            height="80"
            viewBox="0 0 81 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M39.97 26.03L53.41 12.59M53.41 24.11V12.59H41.89M9.25 8.75C9.25 41.39 24.61 56.75 57.25 56.75V41.39L43.81 37.55L39.97 43.31C32.29 43.31 22.69 33.71 22.69 26.03L28.45 22.19L24.61 8.75H9.25Z"
              stroke="#B2C8F1"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <p className=" text-center font-Poppins text-sm font-semibold leading-7 text-white">
            Call
          </p>
          <p className={`${classes.contactText} text-base`}>
            +20123456789 <br /> +20987654321
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
