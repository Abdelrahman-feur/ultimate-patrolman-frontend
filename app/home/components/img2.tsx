import Image from "next/image";
import React from "react";
import mobile5 from "../../../public/assets/homeImages/5.png";
import mobile6 from "../../../public/assets/homeImages/6.png";
import mobile7 from "../../../public/assets/homeImages/7.png";
import mobile8 from "../../../public/assets/homeImages/8.png";

const Img2 = () => {
  return (
    <>
      <div className=" flex space-x-7 items-start w-full    ">
        <Image
          alt="mobile-screen"
          src={mobile5}
          className="w-auto"
          layout="responsive"
        />
        <Image
          alt="mobile-screen2"
          src={mobile6}
          className="w-auto"
          layout="responsive"
        />
        <Image
          alt="mobile-screen2"
          src={mobile7}
          className="w-auto"
          layout="responsive"
        />
        <Image
          alt="mobile-screen2"
          src={mobile8}
          className="w-auto"
          layout="responsive"
        />
      </div>
    </>
  );
};

export default Img2;
