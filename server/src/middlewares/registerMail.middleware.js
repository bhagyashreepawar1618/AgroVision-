import nodemailer from "nodemailer";

const sendRegisterEmail = async (email, fullname) => {
  //configuration
  const transporter = await nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,

    //add details so that nodemailer can communicate with service provider
    auth: {
      user: process.env.SENDER_GMAIL, //sender gmail address
      pass: process.env.SENDER_PASSWORD, //app password
    },
  });

  //actual email body
  const mailOptions = {
    from: {
      name: "CropSense AI",
      address: process.env.SENDER_GMAIL,
    },

    to: email,

    subject: "🌿 Welcome to CropSense AI — Registration Successful!",

    text: `Welcome to CropSense AI, ${fullname}!

Your account has been successfully created.

You can now access CropSense AI and explore our smart farming features including AI assistance, weather forecasting, crop disease detection, irrigation planning, and more.

Thank you for joining us!

— Team Agro vision AI`,

    html: `
    <div style="
      margin: 0;
      padding: 40px 20px;
      background-color: #f0fdf4;
      font-family: Arial, Helvetica, sans-serif;
    ">

      <div style="
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 10px 30px rgba(0,0,0,0.08);
      ">

        <!-- Header -->
        <div style="
          padding: 30px;
          text-align: center;
          background: linear-gradient(135deg, #059669, #0284c7);
          color: white;
        ">
          <h1 style="margin: 0; font-size: 30px;">
            🌿 AgroVision  AI
          </h1>

          <p style="
            margin: 10px 0 0;
            font-size: 15px;
            opacity: 0.9;
          ">
            Smart Farming. Powered by AI.
          </p>
        </div>

        <!-- Content -->
        <div style="padding: 35px 30px;">

          <h2 style="
            margin-top: 0;
            color: #1e293b;
            font-size: 24px;
          ">
            Welcome, ${fullname}! 👋
          </h2>

          <p style="
            color: #475569;
            font-size: 16px;
            line-height: 1.7;
          ">
            Your CropSense AI account has been successfully created.
            We're excited to have you with us!
          </p>

          <div style="
            margin: 25px 0;
            padding: 20px;
            background: #f0fdf4;
            border-left: 4px solid #10b981;
            border-radius: 10px;
          ">
            <p style="
              margin: 0;
              color: #334155;
              line-height: 1.7;
            ">
              🌱 <strong>AI Farming Assistant</strong><br>
              🌦️ Weather Forecasting<br>
              🦠 Crop Disease Detection<br>
              💧 Smart Irrigation Planning<br>
              📈 Crop Yield Prediction
            </p>
          </div>

          <p style="
            color: #475569;
            font-size: 15px;
            line-height: 1.7;
          ">
            You can now log in to your account and start exploring
            smarter ways to manage your farming activities.
          </p>

          <!-- Button -->
          <div style="text-align: center; margin: 30px 0;">
            <a
              href="#"
              style="
                display: inline-block;
                padding: 14px 30px;
                background: linear-gradient(135deg, #059669, #0284c7);
                color: white;
                text-decoration: none;
                border-radius: 10px;
                font-weight: bold;
                font-size: 15px;
              "
            >
              Explore AgroVision AI →
            </a>
          </div>

          <p style="
            margin-top: 30px;
            color: #64748b;
            font-size: 14px;
            line-height: 1.6;
          ">
            If you did not create this account, please ignore this email.
          </p>

        </div>

        <!-- Footer -->
        <div style="
          padding: 20px;
          text-align: center;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
        ">
          <p style="
            margin: 0;
            color: #64748b;
            font-size: 13px;
          ">
            © 2026 Agro vision  AI
          </p>

          <p style="
            margin: 6px 0 0;
            color: #94a3b8;
            font-size: 12px;
          ">
            Smart Farming • Sustainable Future 🌱
          </p>
        </div>

      </div>
    </div>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("mail sent successfully");
  } catch (e) {
    console.log("err occured while sending email", e);
  }
};

export default sendRegisterEmail;
