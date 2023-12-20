import Image from "next/image";
import React from "react";
import location from "../../public/assets/map-location.png";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      <p className="  text-center mt-36 text-white text-3xl font-semibold leading-7 tracking-tighter  font-Poppins">
        Contact Us
      </p>

      <p className="ml-44 mr-44 text-2xl  text-nav-color text-center mt-10 font-normal">
        We are happy to hear from you!
      </p>
      <div className="ml-44 mr-44 flex flex-col space-y-10 mt-16 text-base sm:text-sm lg:text-2xl">
        <div className="flex flex-col lg:flex-row justify-between ">
          <p className="  font-normal text-llGray">Call us on</p>
          <p className=" text-white font-semibold text-left lg:text-right">
            0326653465
          </p>
        </div>
        <div className="flex justify-between flex-col lg:flex-row">
          <p className="  font-normal text-llGray">
            We are also available via email
          </p>
          <div className="flex flex-wrap">
            <p className=" inline  text-white font-semibold text-left lg:text-right ">
              Ultimate.Patrolmen@gmail.com
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between">
          <p className="  font-normal text-llGray">You can find us in</p>
          <p className=" text-white font-semibold text-left lg:text-right">
            Address in Sydney Australia
          </p>
        </div>
      </div>
      <div className="mt-20 mb-32 ml-44 mr-44">
        <p className=" mb-8 text-base font-medium text-lgray">
          Location On Map
        </p>
        <Link href={"https://rb.gy/tlsdoy"} target="blank">
          <Image alt="mapLocation" src={location} width={996} height={409} />
        </Link>
      </div>
    </>
  );
};

export default ContactUs;
