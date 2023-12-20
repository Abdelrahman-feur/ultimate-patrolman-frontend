import React from "react";
import Nav from "./nav";
import CompanyLogo from "../header/components/companyLogo";
import { usePathname } from "next/navigation";

const DashboardLatout = ({ children }: { children: React.ReactNode }) => {
  return (
    // **************************** The Grid Layout For the Dashboard ***************//
    <div className="grid grid-cols-6 ml-2 mr-2 mb-24 md:ml-32 md:mr-36 mt-10 gap-4">
      <header className="flex flex-col min-w-min ">
        <div className="text-left">
          <CompanyLogo />
        </div>
        <div className="mt-8 flex flex-col space-y-8 in-w-min grid-flow-col  ">
          <Nav />
        </div>
      </header>
      <main className=" col-span-5 pl-4 ">{children}</main>
    </div>
  );
};

export default DashboardLatout;
