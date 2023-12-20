import React, { Children } from "react";

type childrenProps = {
  children: React.ReactNode;
};

const PricingHeader: React.FC<childrenProps> = ({ children }) => {
  return (
    <div className=" h-10 bg-btn-primary text-center rounded-t-lg py-2 text-white text-lg font-medium">
      {" "}
      {children}
    </div>
  );
};

export default PricingHeader;
