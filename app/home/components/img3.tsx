import React from "react";

import mobile9 from "../../../public/assets/homeImages/9.png";
import mobile10 from "../../../public/assets/homeImages/10.png";
import Image from "next/image";
function Img3() {
  return (
    <div className=" flex space-x-7 items-center w-full    ">
      <Image alt="lab-screen" src={mobile9} layout="responsive" />
      <Image alt="lab-screen2" src={mobile10} layout="responsive" />
    </div>
  );
}

export default Img3;
