import React, { Children } from "react";
import classes from "../style.module.css";
type childrenType = {
  children: React.ReactNode;
};
const PricingItem: React.FC<childrenType> = ({ children }) => {
  return (
    <div>
      <svg
        className="inline mr-4 ml-2"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 6.99997L19.5899 5.58997L8.99991 16.17Z"
          fill="#4FC646"
        />
      </svg>
      <span
        className={`font-Poppins text-sm font-normal leading-normal ${classes.textColor} `}
      >
        {children}
      </span>
    </div>
  );
};

export default PricingItem;
