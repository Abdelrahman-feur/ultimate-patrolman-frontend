"use client";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useState } from "react";

const FogotPassword = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const handleSubmit = () => {
    router.push("/resetpassword");
  };
  return (
    <>
      <div className=" my-20">
        <input
          placeholder="Email"
          id="email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          className=" m-auto block border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>

        <button
          className="block rounded-lg m-auto mt-11 bg-btn-primary text-white h-14 w-96"
          onClick={handleSubmit}
        >
          {" "}
          Submit{" "}
        </button>
      </div>
    </>
  );
};

export default FogotPassword;
