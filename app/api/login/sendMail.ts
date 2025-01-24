import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import moment from 'moment';


export async function Mailer(params:any) {
try {
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'saifultamim13@gmail.com',
        pass: 'tjpe dwik wfwy gwkx',
      },
    });
    const mailOptions = {
      from: 'saifultamim13@gmail.com',
      to: 'saifultamim38@gmail.com',
      subject: 'Your One-Time Password',
      html: `
   <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OTP Email Template</title>
  <style>
      body {
          font-family: Arial, sans-serif;
          background-color: #f5f5f5;
          margin: 0;
          padding: 0;
      }
      .email-container {
          max-width: 600px;
          margin: 20px auto;
          background: #ffffff;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
      }
      .email-header {
          background: #05163B;
          color: white;
          padding: 20px;
      }
      .email-header table {
          width: 100%;
      }
      .email-header h1 {
          margin: 0;
          font-size: 24px;
          text-align: left;
      }
      .email-header h3 {
          margin: 0;
          font-size: 16px;
          text-align: right;
      }
      .email-body {
          padding: 20px;
          color: black;
          font-weight:medium;
      }
      .email-body h2 {
          color: #333333;
          font-size: 20px;
          text-align: center;
      }
      .otp {
          font-size: 36px;
          font-weight: bold;
          color: black;
          text-align: center;
          margin: 20px 0;
      }
      .note {
          font-size: 14px;
          color: #555555;
          margin-top: 10px;
          text-align: center;
      }
      .email-footer {
          background: #f5f5f5;
          padding: 20px;
          text-align: center;
          font-size: 12px;
          color: #777777;
      }
      .social-icons {
          margin-top: 10px;
      }
      .social-icons img {
          width: 24px;
          height: 24px;
          margin: 0 5px;
      }
      .email-footer a {
          color: #4b7bec;
          text-decoration: none;
      }
      .name {
          font-size: 15px;
      }
    .colorText {
          color:black;
          font-weight:medium
          }
  </style>
</head>
<body>
  <div class="email-container">
      <div class="email-header">
          <table>
              <tr>
                  <td style="width: 50%;">
                      <h1>Band Name</h1>
                  </td>
                  <td style="width: 50%; text-align: right;">
                      <h3>${moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
                  </td>
              </tr>
          </table>
      </div>
      <div class="email-body">
          <h2>Your One-Time Password</h2>
          <h2>Dear <span class="name">Admin,</span></h2>
          <p class="colorText">Here is your One-Time Password to securely log in to your Brand Name account:</p>
          <div class="otp">${params.otps}</div>
          <p class="note">Note: This OTP is valid for 5 minutes.</p>
          <p class="colorText">If you did not request this OTP, please disregard this email or contact our support team.</p>
          <p class="colorText">Thank you for learning with Brand Name!</p>
      </div>
      <div class="email-footer">
          <p>Team BrandName</p>
          <p>Website: <a href="#">Brand Email</a> | Phone: +88 01643704054</p>
          <p>Address: Malibag, Dhaka.</p>
          <div class="social-icons">
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png" alt="Facebook"></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="Twitter"></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn"></a>
              <a href="#"><img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="Instagram"></a>
          </div>
      </div>
  </div>
</body>
</html>

        `,
    };
    
    const result = await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "API message successfully" ,result,success:true});
  } catch (error) {
    return NextResponse.json({ message: "API message is not successfully" ,success:false});
  }
  
}
