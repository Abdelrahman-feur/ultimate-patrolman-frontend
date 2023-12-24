"use client";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { LoginStatusContext } from "../layout";

import type { NextPage } from "next";
import { Field, Formik, useFormik, Form } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useUserState } from "../lib/hooks";
import { json } from "stream/consumers";
const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});

const LoginForm: NextPage = () => {
  const router = useRouter();
  const { setLoggedIn } = useContext(LoginStatusContext);

  const [loggedin, setloggedIn] = useState();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: ({ email, password }) => {
      setLoggedIn(true);
      localStorage.setItem("loggedIn", "true");
      router.push("/dashboard");
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <form onSubmit={handleSubmit} className=" space-y-7 ">
        <input
          placeholder="Email"
          id="email"
          value={values.email}
          type="email"
          onChange={handleChange}
          className=" m-auto block border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        {errors.email && touched.email && (
          <span className="text-red">{errors.email}</span>
        )}

        <input
          placeholder="password"
          id="password"
          type="password"
          onChange={handleChange}
          className=" block m-auto border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        {errors.password && touched.password && (
          <span className="text-red">{errors.password}</span>
        )}

        <div className="flex justify-between text-white w-96 m-auto text-sm ">
          <div>
            {" "}
            <input
              type="checkbox"
              value={"true"}
              id="remeberMe"
              className=" border rounded-md "
            />{" "}
            <label>remember me</label>
          </div>
          <div>
            <Link href="/forgotpassword">Forgot password?</Link>{" "}
          </div>
        </div>
        <button
          className=" block m-auto text-white bg-btn-primary w-96 h-16 rounded-lg p-4 "
          type="submit"
        >
          {" "}
          Login{" "}
        </button>
        {/* <span className="text-red"> Invalid Credintials</span> */}
      </form>
    </>
  );
};

export default LoginForm;
