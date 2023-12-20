import Image from "next/image";
import React from "react";
import mobile1 from "../../../public/assets/homeImages/1.png";
import mobile2 from "../../../public/assets/homeImages/2.png";
import mobile3 from "../../../public/assets/homeImages/3.png";
import mobile4 from "../../../public/assets/homeImages/4.png";

const Img1 = () => {
  return (
    <>
      <div className=" flex space-x-7 items-start w-full    ">
        <Image
          alt="mobile-screen"
          src={mobile1}
          className=""
          layout="responsive"
        />
        <Image
          alt="mobile-screen2"
          src={mobile2}
          className="w-auto"
          layout="responsive"
        />
        <Image
          alt="mobile-screen2"
          src={mobile3}
          className="w-auto"
          layout="responsive"
        />
        <Image
          alt="mobile-screen2"
          src={mobile4}
          className="w-auto"
          layout="responsive"
        />
      </div>
    </>
  );
};

export default Img1;
