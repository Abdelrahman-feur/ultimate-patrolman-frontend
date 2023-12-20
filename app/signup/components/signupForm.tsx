import Link from "next/link";
import React, { useState } from "react";
import type { NextPage } from "next";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(3, "First name must be at least 3 characters"),
  lastName: Yup.string()
    .required("First Name is required")
    .min(3, "First name must be at least 3 characters"),
  email: Yup.string().required().email("Email is required"),
  userName: Yup.string().lowercase("user name mst be a lowercase").required(),
  password: Yup.string()
    .required()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).*$/,
      "The pasword must contain at least one special character,uppercase, number "
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Passwords must match"
  ),
});
const SignupForm: NextPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
    },

    // Pass the Yup schema to validate the form
    validationSchema: schema,

    // Handle form submission
    onSubmit: async ({ firstName, lastName, userName, email, password }) => {
      // Make a request to your backend to Signup
    },
  });
  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <form onSubmit={handleSubmit} method="POST" className=" space-y-7 mb-14 ">
        <input
          placeholder="First Name"
          id="firstName"
          value={values.firstName}
          type="text"
          onChange={handleChange}
          className=" m-auto block border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        {errors.firstName && touched.firstName && (
          <span>{errors.firstName}</span>
        )}
        <input
          placeholder="Last Name"
          id="lastName"
          value={values.lastName}
          type="text"
          onChange={handleChange}
          className=" m-auto block border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        {errors.lastName && touched.lastName && <span>{errors.lastName}</span>}
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
          placeholder="User Name"
          id="userName"
          value={values.userName}
          type="text"
          onChange={handleChange}
          className=" m-auto block border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        {errors.userName && touched.userName && <span>{errors.userName}</span>}
        <input
          placeholder="password"
          id="password"
          type="password"
          value={values.password}
          className=" block m-auto border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        {errors.password && touched.password && <span>{errors.password}</span>}
        <input
          placeholder="Confirm password"
          id="confirmPassword"
          type="password"
          value={values.confirmPassword}
          className=" block m-auto border-2 rounded-lg border-gray bg-transparent h-14 w-96 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        {errors.confirmPassword && touched.password && (
          <span>{errors.confirmPassword}</span>
        )}

        <button
          className=" block m-auto text-white bg-btn-primary w-96 h-16 rounded-lg p-4  "
          type="submit"
        >
          {" "}
          Sign up{" "}
        </button>
      </form>
    </>
  );
};

export default SignupForm;
