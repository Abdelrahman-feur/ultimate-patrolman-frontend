import React from "react";
import mobile11 from "../../../public/assets/homeImages/11.png";
import mobile12 from "../../../public/assets/homeImages/12.png";
import Image from "next/image";

const Img4 = () => {
  return (
    <div className=" flex space-x-7 items-center w-full    ">
      <Image alt="lab-screen" src={mobile11} layout="responsive" />
      <Image alt="lab-screen2" src={mobile12} layout="responsive" />
    </div>
  );
};

export default Img4;
