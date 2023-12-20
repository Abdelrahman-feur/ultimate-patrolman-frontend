import React, { useState } from "react";

interface IssueType {
  fullName: string;
  email: String;
  message: String;
}
const IssueForm = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [formValid, setFormValid] = useState(true);
  const [message, setMessage] = useState("");
  const [issue, setIssue] = useState<IssueType>();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!email || !fullName) {
      setFormValid(false);
    } else {
      setIssue({ email, fullName, message });
    }
  };
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex flex-col flex-wrap mb-8  h-fit max-w-full"
      >
        <div className="flex space-x-0 lg:space-x-10 flex-wrap ">
          <div className="mt-4  ">
            <p className=" text-white font-Poppins text-base ">Full Name</p>
            <input
              placeholder="FullName"
              id="fullName"
              type="text"
              required
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              className=" mt-3 h-14  max-w-full sm:w-96  bg-transparent  rounded-lg border border-gray focus:border-btn-primary outline-0"
            ></input>
          </div>

          <div className="mt-4 ">
            <p className=" text-white font-Poppins text-base ">Email</p>
            <input
              placeholder="Email"
              id="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className=" mt-3 h-14 max-w-full sm:w-96 bg-transparent  rounded-lg border border-gray focus:border-btn-primary outline-0"
            ></input>
          </div>
        </div>
        <div className=" flex flex-col mt-10">
          <div>
            <p className=" text-white font-Poppins text-base">Issue</p>
            <input
              placeholder="Message"
              id="message"
              value={message}
              required
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              className=" mt-3 h-32 w-full bg-transparent block rounded-lg border border-gray focus:border-btn-primary outline-0"
            ></input>
          </div>
        </div>
        <div className="mt-10 text-center">
          <input
            type="submit"
            value={"Send message"}
            className=" bg-btn-primary text-white rounded-lg w-72 h-12 cursor-pointer"
          />
        </div>
        {!formValid && (
          <div className=" text-center text-red">Please Correct the Issues</div>
        )}
      </form>
    </>
  );
};

export default IssueForm;
