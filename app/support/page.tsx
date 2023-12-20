"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Icon1 from "./components/icon1";
import Icon2 from "./components/icon2";
import Icon3 from "./components/icon3";
import IssueForm from "./components/issueForm";

const Support = () => {
  const router = useRouter();
  const [chat, setChat] = useState("invisible");
  const [issueForm, setIssueForm] = useState("invisible");
  const [message,setMessage]=useState("")

  return (
    <div className=" ml-20 mr-20 mt-20 flex flex-col items-center justify-center ">
      <div className="flex flex-col text-center space-y-6">
        <p className="text-4xl font-semibold text-white">Support</p>
        <p className="text-nav-color text-base">
          We treat each inquiry from our customers with individual care.
          Whatever your problem is, our support team will gladly help you fix
          it.
        </p>
      </div>
      <div
        onClick={() => router.push("/support/FAQs")}
        className=" mt-24 ml-32 mr-32 supportCard text-center flex flex-col-reverse lg:flex-row  justify-between items-center p-8"
      >
        <div className=" inline-flex flex-wrap flex-col space-y-16  ">
          <div className="text-2xl leading-10 font-medium text-lightGray w-96">
            You can view FAQ they will help you to find solution
          </div>
          <div className="text-btn-primary font-medium">
            View FQA for help{" "}
            <span className="ml-5">
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M16.01 11.5H4V13.5H16.01V16.5L20 12.5L16.01 8.5V11.5Z"
                  fill="#2B6DE7"
                />
              </svg>
            </span>{" "}
          </div>
        </div>
        <Icon1 />
      </div>
      {/***********************             Card2            ************************/}
      <div
        onClick={() =>{ 
          router.push("#chatbot")
          setChat("visible")}}
        className=" mt-24 ml-32 mr-32 supportCard text-center flex flex-col-reverse lg:flex-row  justify-between items-center p-8"
      >
        <div className=" inline-flex flex-wrap flex-col space-y-16  ">
          <div className="text-2xl leading-10 font-medium text-lightGray w-96">
            You can chat with us to know what you need
          </div>
          <div className="text-btn-primary font-medium">
            Chat Now
            <span className="ml-5">
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M16.01 11.5H4V13.5H16.01V16.5L20 12.5L16.01 8.5V11.5Z"
                  fill="#2B6DE7"
                />
              </svg>
            </span>{" "}
          </div>
        </div>
        <Icon2 />
      </div>
      {/***********************             Card3            ************************/}
      <div
        onClick={() => {
          setIssueForm("visible");
          router.push("#issueForm");
        }}
        className=" mb-64 mt-24 ml-32 mr-32 supportCard text-center flex flex-col-reverse lg:flex-row  justify-between items-center p-8"
      >
        <div className=" inline-flex flex-wrap flex-col space-y-16  ">
          <div className="text-2xl leading-10 font-medium text-lightGray w-96">
            Still you have issue ! Please tell us more details about it
          </div>
          <div className="text-btn-primary font-medium">
            Fill The form
            <span className="ml-5">
              <svg
                className="inline"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M16.01 11.5H4V13.5H16.01V16.5L20 12.5L16.01 8.5V11.5Z"
                  fill="#2B6DE7"
                />
              </svg>
            </span>{" "}
          </div>
        </div>
        <Icon3 />
      </div>
      {/************************            Chat POPUP            **********************************/}
      <div
      id="chatbot"
      className={`popup flex items-start justify-center h-96 ${chat} `}>
        <div className=" sticky rounded-2xl bg-popupbackground w-2/3">
          <p
            className="text-white m-2 text-right text-2xl cursor-pointer"
            onClick={() => setChat("invisible")}
          >
            X
          </p>
          Live Chat
          <input
          placeholder="Type message"
          id="message"
          value={message}
          type="text"
          onChange={(e)=>setMessage(e.target.value)}
          className=" m-auto block border-2 rounded-lg border-gray bg-transparent h-14 w-2/3 text-white box-border focus:border-btn-primary outline-0"
        ></input>
        </div>
        
      </div>

      {/********************** Issue Form  ******************************/}
      <div
        id="issueForm"
        className={`popup flex justify-center p-10 items-start max-w-full h-screen ${issueForm}`}
      >
        <div className="bg-popupbackground justify-center items-center w-2/3 rounded-2xl flex flex-col sticky  ">
          <div
            className="text-white m-2 text-right text-2xl cursor-pointer hover:text-btn-primary"
            onClick={() => {
              setIssueForm("invisible");
            }}
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
          <h3 className="text-white text-3xl text-center font-semibold ">
            Issue Form
          </h3>
          <p className="mt-4 text-white max-w-lg text-center">
            Did not find an answer in our FQAs? Don`t worry, fill in the form
            below and we will get back to you shortly.
          </p>
          <IssueForm />
        </div>
      </div>
    </div>
  );
};

export default Support;
