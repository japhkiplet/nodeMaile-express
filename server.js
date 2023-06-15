import express from "express";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const { port, url } = process.env;

const app = express();

// Create a transporter using SMTP details
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "japhkiplet@gmail.com",
    pass: "zbiclmxwgnrptofs",
  },
});

// Compose the email message
const mailOptions = {
  from: "japhkiplet@gmail.com",
  to: "lagatjapheth98@gmail.com, collinsmwendwa1968@gmail.com, cit2210162020@mmu.ac.ke",
  subject: "Hello from Nodemailer",
  text: "YOOOOOH😂😂😂.",
  html: "<p>you need to work hard</p>",
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
