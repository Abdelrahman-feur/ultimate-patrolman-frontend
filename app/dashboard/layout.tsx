"use client";
import React, { Suspense, useState } from "react";
import Nav from "./nav";
import CompanyLogo from "../header/components/companyLogo";
import { usePathname } from "next/navigation";
import SuperAdminNav from "./superAdminNav";
import Loading from "./loading";

const DashboardLatout = ({ children }: { children: React.ReactNode }) => {
  const [admin, setsAdmin] = useState("superAdmin");
  return (
    // **************************** The Grid Layout For the Dashboard ***************//
    <div className="grid grid-cols-6 ml-2 mr-2 mb-24 mt-10 gap-4">
      <header className="flex flex-col min-w-min ">
        <div className="text-left pl-8">
          <CompanyLogo />
        </div>
        <div className="mt-8 flex flex-col space-y-8 min-w-min grid-flow-col pl-6 ">
          {admin === "admin" ? <Nav /> : <SuperAdminNav />}
        </div>
      </header>
      <Suspense fallback={<Loading />}>
        <main className=" col-span-5 pl-4 border ">{children}</main>
      </Suspense>
    </div>
  );
};

export default DashboardLatout;
