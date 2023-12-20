import React from "react";
import classes from "./features.module.css";

const DuressFunctionCard = () => {
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
        <path
          d="M47.5 38.4444H45.8334V29.2778C45.8334 26.0362 44.4286 22.9275 41.9281 20.6353C39.4276 18.3432 36.0363 17.0555 32.5 17.0555C28.9638 17.0555 25.5724 18.3432 23.072 20.6353C20.5715 22.9275 19.1667 26.0362 19.1667 29.2778V38.4444H17.5C17.058 38.4444 16.6341 38.6054 16.3215 38.8919C16.009 39.1784 15.8334 39.567 15.8334 39.9722V46.0833C15.8334 46.4885 16.009 46.8771 16.3215 47.1636C16.6341 47.4501 17.058 47.6111 17.5 47.6111H47.5C47.9421 47.6111 48.366 47.4501 48.6786 47.1636C48.9911 46.8771 49.1667 46.4885 49.1667 46.0833V39.9722C49.1667 39.567 48.9911 39.1784 48.6786 38.8919C48.366 38.6054 47.9421 38.4444 47.5 38.4444ZM22.5 29.2778C22.5 26.8466 23.5536 24.515 25.429 22.796C27.3043 21.0769 29.8479 20.1111 32.5 20.1111C35.1522 20.1111 37.6957 21.0769 39.5711 22.796C41.4465 24.515 42.5 26.8466 42.5 29.2778V38.4444H22.5V29.2778ZM45.8334 44.5555H19.1667V41.5H45.8334V44.5555Z"
          fill="#C8C8C9"
        />
        <path
          d="M25.8334 29.2777H29.1667C29.1667 28.4674 29.5179 27.6902 30.143 27.1171C30.7681 26.5441 31.616 26.2222 32.5 26.2222V23.1666C30.7319 23.1666 29.0362 23.8105 27.786 24.9565C26.5358 26.1026 25.8334 27.657 25.8334 29.2777Z"
          fill="#C8C8C9"
        />
      </svg>
      <p className="text-lg font-medium text-white mt-12">Duress Function</p>
      <p
        className="text-center font-Poppins text-base font-normal leading-7 text-neutral-400 mt-6 mb-8
"
      >
        Immediate notifications in case of emergencies
      </p>
    </div>
  );
};

export default DuressFunctionCard;