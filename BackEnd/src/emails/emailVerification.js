import nodemailer from "nodemailer";
import { emailTemplate } from "./emailVerificatiomTemplete.js";
import jwt from 'jsonwebtoken';

export const emailVerification = async (email) => {
 
  const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "ahmed099rabie099@gmail.com",
          pass: "uckdmwpyyvarvbqc",
        },
      });
      const token = jwt.sign({email} , 'secretKey');
 const info = await transporter.sendMail({
    from: '"CookMate Community " <ahmed099rabie099@gmail.com>', // sender address
    to: email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: emailTemplate(token), // html body
  });

  console.log("Message sent:", info.messageId);
};


