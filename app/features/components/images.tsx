import React from "react";
import Image from "next/image";
import firstPic from "../../../public/assets/Mobile mockup 2.png";
import secondPic from "../../../public/assets/Mobile mockup 2 (1).png";
import thirdPic from "../../../public/assets/Mobile mockup 3.png";

const Images = () => {
  return (
    <div className=" mobileContainer border m-auto ">
      <Image
        src={firstPic}
        alt="mobile1"
        width={99}
        height={200}
        className="max-w-full"
        layout="responsive"
      />
      <Image
        src={thirdPic}
        alt="mobile3"
        width={99}
        height={200}
        className="max-w-full border"
        layout="responsive"
      />
      <Image
        src={secondPic}
        alt="mobile2"
        width={99}
        height={200}
        layout="responsive"
      />
    </div>
  );
};

export default Images;
