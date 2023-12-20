import Link from "next/link";
import React from "react";

const SignUp = () => {
  return (
    <Link
      href="/signup"
      className=" text-white h-10 w-32 bg-btn-primary rounded-md inline-flex justify-center items-center"
    >
      sign Up
    </Link>
  );
};

export default SignUp;
