import nodemailer from "nodemailer";

const EmailSend = async (EmailTo, EmailText, EmailSubject) => {
  let transport = nodemailer.createTransport({
    host: "mail.freelancerazizulhakim.com",
    port: 465,
    secure: true,
    auth: {
      user: "contact@freelancerazizulhakim.com",
      pass: "68178@#$Azizul",
    },
    tls: { rejectUnauthorized: false },
  });

  let mailOption = {
    from: "Blog Agency Website OTP Code.  <contact@freelancerazizulhakim.com>",
    to: EmailTo,
    subject: EmailSubject,
    text: EmailText,
  };

  return await transport.sendMail(mailOption);
};

export default EmailSend;
