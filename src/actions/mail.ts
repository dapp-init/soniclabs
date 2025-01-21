"use server";

import { sendEmail } from "@/app/emails/email";

export const send = async (subject: any, body:string) => {
    await sendEmail({
      to: "cybercrash420@gmail.com",
      name: "Harvey",
      subject: subject,
      body: `${body}`,
    });
  };