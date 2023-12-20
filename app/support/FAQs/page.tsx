import React from "react";
import FAQsAccordion from "./components/FAQsAccordion";
import { string } from "yup";

const FAQsPage = () => {
  const accordionContent = [
    {
      id: 1,
      question:
        "How is the Ultimate Patrolman system different from other systems in the industry?",
      answer:
        "Our system aims to make everything easier for the user. We carefully analyzed similar systems to present customers with what they missed and needed. Our company understands the value of time, so we automate many functions to help our clients save time for many important tasks. With our system, you can fully manage patrols and/or static guards and eliminate overwhelming paperwork.",
    },
    {
      id: 2,
      question: "2-How will the Ultimate Portman system help my business?",
      answer:
        "Imagine the amount of time lost on monotonous paperwork filing and filing; what if your employees can invest this time in something better? Easy, effective, and quick is what our system is all about. With just a button click, guards and control room employees can check and insert data as needed. The Ultimate Portman system prides itself on acting as a helping hand to companies wanting to grow and expand with no hassle.",
    },
    {
      id: 3,
      question: "3-What are the different packages you offer?",
      answer: `We offer three packages to cater for the variety of needs of our customers. The 1st package we offer is our "Minor" package for companies who need patrol management only. Our 2nd package is the "Moderate" and is recommended for clients only with static guards. Finally, our third package is the "Enterprise "package for clients with patrols and static guards. Learn more (Directs clients to pricing page)`,
    },
    {
      id: 4,
      question: `4-How can I cancel my subscription to any of the packages I choose?`,
      answer: `Since subscriptions are paid monthly, you can easily cancel subscriptions from your account.`,
    },
    {
      id: 5,
      question: `5-What kind of technical support do you offer?`,
      answer: `We believe in being there for our clients whenever they need us. That is why we have a live chat option for clients who talk directly to someone from our support team. You can also fill in a form with any issue you are facing, and a member of our support team will contact you and provide you with the help you need.`,
    },
    {
      id: 6,
      question: "6-How will guards be able to use the system?",
      answer: `Your guards will be asked to download a PDF containing all the data related to the system and study it carefully. After that, they should answer training-related questions to show they went through the document carefully and are ready to use the design on their mobile app.`,
    },
    {
      id: 7,
      question: `7-What is the difference between the mobile app and the desktop module?`,
      answer: `The mobile app is for guards to download and use for sign-ins and outs, receive notifications, upload documents, and all their work-related functions. The desktop is to be used by the control room employees to have a deeper look at the guards' work and monitor workflow.`,
    },
  ];
  return (
    <div className="ml-20 mr-20">
      <p className="mt-28 font-Poppins text-base font-semibold text-white text-center">
        Help & FAQs
      </p>
      <div className="mt-12 mb-12">
        {accordionContent.map((item) => (
          <div className="mt-10" key={"container"}>
            <FAQsAccordion
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
