"use client";
import { useSearchParams } from "next/navigation";
import * as React from "react";

interface EmailTemplateProps {
  companyName: string | null;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  companyName,
}) => {
  const query = useSearchParams();
  // const companyName = query.get("companyName");
  const email = query.get("email");
  return (
    <div>
      <div className="mt-7 pt-12 bg-cardbg h-80 px-10 max-w-2xl m-auto ">
        <p className="text-white font-Poppins text-lg font-medium leading-6 tracking-wide ">
          {companyName}
        </p>
        <p className="font-Poppins text-lg font-medium leading-6 tracking-wide text-white mt-6  ">
          We remember that the date of renew package is 20/3/2023
        </p>
        <p className="text-nav-color text-xl font-normal leading-8 tracking-wide max-w-xl mt-6 ">
          Lorem Ipsom In a world where speed and efficiency are key, business
          owners can use can be done properly. There are a handful of client
          management systems out there trying to lend a hand to CEOs .
        </p>
      </div>
    </div>
  );
};
