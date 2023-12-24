import React from "react";
import CorrectSVG from "./correctSVG";

const PackageItem = ({
  children,
  mt,
}: {
  children: React.ReactNode;
  mt: String;
}) => {
  return (
    <p className={`${mt}  text-xs md:text-sm font-normal text-neutral-500 `}>
      <CorrectSVG />
      {children}
    </p>
  );
};

export default PackageItem;
