import { NextPage, GetStaticProps } from "next";

import React from "react";
interface MyPageProps {
  question: string;
  answer: String;
}
const FAQsAccordion: NextPage<MyPageProps> = ({ question, answer }) => {
  return (
    <>
      <div className="collapse collapse-plus text-white  border-t-0 border-b-0 border-r-0 border-l-0 rounded-none ">
        <input type="radio" name="my-accordion-3" />
        <div className=" text-xl collapse-title font-medium flex border border-gray border-r-0 border-l-0 items-center">
          <span className="text-gray text-base">{question}</span>
        </div>
        <div className="collapse-content border pt-4 border-t-0 border-b-gray  border-l-0 border-r-0 w-full">
          <p className="text-base text-gray ">{answer}</p>
        </div>
      </div>
    </>
  );
};

export default FAQsAccordion;
