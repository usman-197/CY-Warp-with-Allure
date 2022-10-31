
require('dotenv').config()
const nodemailer = require("nodemailer");

//mail setup
(async function run() {
    console.log('test');

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: process.env.MAIL_USER_EMAIL,
          pass: process.env.MAIL_USER_PASS
        },
      });
    await transporter.sendMail({
        from: process.env.USER_FROM_EMAIL, // sender address
        to: process.env.USER_TO_EMAIL, // list of receivers
        subject: `
            Result
        `,
        text: `
            Cron Result
        `,
        html: `
            <h1> R.E.S.U.L.T. </h1>
        `,
      });
})();
