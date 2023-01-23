// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { transporter } from "../../config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    // console.log("data", data);

    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: "Bad request" });
    }

    try {
      const result = await transporter.sendMail({
        from: "ddcgrouplao@gmail.com",
        to: "info@ddcgroups.la, ddcgrouplao@gmail.com, savanbandith@gmail.com, khoun.silaxa@gmail.com",
        subject: "Email from website ddcgroups.com", // Subject line
        text: data.message, // plain text body
        html: emailBody(data), // html body
      });
      //   console.log("result", result);

      return res.status(200).json({ success: true, message: result.messageId });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: "Bad request" });
};

const emailBody = (data) => {
  const paintText =
    "<h4>From: " +
    data.name +
    ", Email: " +
    data.email +
    "</h4>" +
    '<pre style = "font-family:Roboto">' +
    data.message +
    "</pre>";

  return paintText;
};

export default handler;
