import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <Link
      href="/login"
      className=" h-10 w-32 rounded-md inline-flex justify-center items-center border border-btn-primary text-btn-primary"
    >
      login
    </Link>
  );
};

export default SignIn;
