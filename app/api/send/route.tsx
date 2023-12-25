import { EmailTemplate } from "@/app/dashboard/failed-payments/email/email-tempelate";
import { Resend } from "resend";

const resend = new Resend("re_123456789");

export async function POSTMe() {
  try {
    const data = await resend.emails.send({
      from: `Acme <onboarding@resend.dev>`,
      to: [`delivered@resend.dev`],
      subject: "Hello world",
      text: "Hello",
      react: EmailTemplate({ companyName: "my Company" }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
