const nodemailer = require("nodemailer");

const gmail = process.env.NEXT_PUBLIC_GMAIL;
const password = process.env.NEXT_PUBLIC_NODEMAILER_PWD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmail,
    pass: password,
  },
});
