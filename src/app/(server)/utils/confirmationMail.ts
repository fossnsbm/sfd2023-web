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
    subject: "Welcome to SFD 2023",
    html: `
    <h1>Hi ${name},</h1>
    <p>Thank you for registering for the SFD 2023. We are excited to have you on board.</p>
    <p>our decision to join us in celebrating and promoting open-source software is not only exciting but also incredibly valuable to the spirit of innovation and collaboration.</p>
    <p>The event will be held in <b>C2-002</b> from <b> 9.00am - 1pm </b> on the <b> 18th of September 2023 </b> </p>
    <p>Your decision to join us in celebrating and promoting open-source software is not only exciting but also incredibly valuable to the spirit of innovation and collaboration.</p>
    <p>See you there!</p>
    `,
  };

  await new Promise((resolve, reject) => {
    mailTransport.sendMail(details, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(info);
      }
    });
  });
};
