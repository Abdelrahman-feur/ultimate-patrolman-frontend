"use client";
import React from "react";
import { EmailTemplate } from "./email-tempelate";
import { useRouter, useSearchParams } from "next/navigation";
import { Resend } from "resend";
import { POSTMe } from "@/app/api/send/route";
const Page = () => {
  const router = useRouter();
  const resend = new Resend("re_7nUVktcJ_LJvAMkJcNjWPp2NBTgqrU3xE");
  const query = useSearchParams();
  const companyName = query.get("companyName");
  const email = query.get("email");

  async function POST() {
    try {
      const data = await resend.emails.send({
        from: `Acme<onboarding@resend.dev>`,
        subject: `Reminder`,
        to: [`abdelrahmansanad98@gmail.com`],
        text: " ",
        react: EmailTemplate({ companyName: companyName }),
      });

      console.log(" from POST Function");
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  }

  return (
    <div>
      <h2 className="font-semibold text-2xl font-Poppins leading-8     text-white text-center">
        {companyName}
      </h2>
      <div className="flex space-x-12 justify-center mt-10">
        <p className=" inline-block text-lg text-nav-color font-normal leading-6 tracking-wide">
          company Name
        </p>
        <p className=" inline-block text-lg font-normal leading-6 tracking-wide text-white">
          {companyName}
        </p>
      </div>
      <EmailTemplate companyName={companyName} />
      <div className="mt-10 m-auto text-center space-x-6 ">
        <button
          onClick={POSTMe}
          className="text-white btn bg-btn-primary w-56 rounded-lg h-12 text-base font-semibold leading-7 tracking-tight"
        >
          Send Now
        </button>
        <button
          onClick={() => router.push("/dashboard/failed-payments")}
          className="  text-btn-primary border border-btn-primary w-56 rounded-lg h-12 text-base font-semibold leading-7 tracking-tight"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Page;
