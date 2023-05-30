const express = require("express");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ limit: "25mb" }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

function sendEmail({ mail, title, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });
    // const output = welcomeEmail(sendEmail, title, message);
    const mailOptions = {
      from: mail,
      to: process.env.SMTP_MAIL,
      subject: title,
      text: message,
      html: `From: ${mail} Full Message: ${message}`,
    };
    transporter.sendMail(mailOptions, function (error, data) {
      if (error) {
        console.log(error);
        return reject({ message: "An Error Occurred" });
      } else {
        return resolve({ message: "Mail Sent" });
      }
    });
  });
}

app.get("/", (req, res) => {
  sendEmail()
    .then((response) => res.send(response.message))
    .then((error) => res.status(500).send(error.message));
});

app.post("/send_email", (req, res) => {
  // console.log(req.body);
  sendEmail(req.body)
    .then((response) => res.send(response.message))
    .then((error) => res.status(500).send(error.message));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
