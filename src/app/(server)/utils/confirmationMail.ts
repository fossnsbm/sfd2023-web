import nodemailer from "nodemailer";
export const confirmationMail = async (
  universityMail: string,
  name: string
) => {
  const mailTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_SENDER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const details = {
    from: process.env.GMAIL_SENDER,
    to: universityMail,
    subject: "Welcome to the SFD 2023",
    html: `<h1>Hi ${name}, Please welcome to the SFD 2023. </h1>`
  };

  await mailTransport.sendMail(details, (err) => {
    if (err) console.log(err);
    else console.log("Email sent successfully");
  });
};
