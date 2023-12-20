import Link from "next/link";
import React, { useState } from "react";
import type { NextPage } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  email: Yup.string().required().email(),
  password: Yup.string().required(),
});
const LoginForm: NextPage = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: ({ email, password }) => {
      // Make a request to your backend to login
      router.push("/dashboard");
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <form onSubmit={handleSubmit} method="POST" className=" space-y-7 ">
        <input
          placeholder="Email"
          id="email"
          value={values.email}
          type="email"
          onChange={handleChange}
          className=" m-auto block border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        {errors.email && touched.email && <span>{errors.email}</span>}

        <input
          placeholder="password"
          id="password"
          type="password"
          className=" block m-auto border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        {errors.password && touched.password && <span>{errors.password}</span>}

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
        <span className="text-red"> Invalid Credintials</span>
      </form>
    </>
  );
};

export default LoginForm;
