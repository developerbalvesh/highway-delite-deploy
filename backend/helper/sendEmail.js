import nodemailer from "nodemailer";
export const sendOtpEmail = async (otp, email) => {
  try {
    const html = `<h3>Please enter below OTP to verify your email:</h3><h1>${otp}</h1>`;
    const pass = await process.env.EMAIL_PASS;
    console.log(pass);
    // send mail start
    const auth = await nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: "pskbalvesh@gmail.com",
        pass: pass,
      },
    });
    const receiver = {
      from: "pskbalvesh@gmail.com",
      to: email,
      subject: "Highway Delite OTP verification!",
      html,
    };
    await auth.sendMail(receiver, (error, emailResponse) => {
      if (error) {
        throw error;
      } else {
        console.log("success!");
      }
      // response.end();
    });
    // send mail end
  } catch (error) {
    console.log(error);
  }
};
//# sourceMappingURL=sendEmail.js.map
