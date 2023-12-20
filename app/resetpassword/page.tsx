"use client";
import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [valid, setValid] = useState(true);

  const handleSubmit = () => {};
  return (
    <>
      <input
        placeholder="New Password"
        id="password"
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        className=" mt-20 m-auto block border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
      ></input>
      <input
        placeholder="Repeat New Password"
        id="email"
        value={repeatPassword}
        type="password"
        onChange={(e) => setRepeatPassword(e.target.value)}
        className=" my-9 m-auto block border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
      ></input>
      <button
        className="block rounded-lg m-auto mt-11 bg-btn-primary text-white h-14 w-96"
        onClick={handleSubmit}
      >
        {" "}
        Submit{" "}
      </button>
    </>
  );
};

export default ResetPassword;
