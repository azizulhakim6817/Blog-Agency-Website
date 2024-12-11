import { EncodeToken } from "../utility/tokenUtility.js";
import EmailSend from "./../utility/emailUtilety.js";
import UserModel from "./../Models/UserModel2.js";

///UserOTPService.....................................
export const UserOTPService = async (req) => {
  try {
    let email = req.params.email;
    let code = Math.floor(100000 + Math.random() * 900000);

    let EmailText = `Your Verification Code is= ${code}`;
    let EmailSubject = "Email Verification";

    await EmailSend(email, EmailText, EmailSubject);

    await UserModel.updateOne(
      { email: email },
      { $set: { otp: code } },
      { upsert: true }
    );

    return { status: "success", message: "6 Digit OTP has been send" };
  } catch (e) {
    return { status: "fail", message: e };
  }
};

//VerifyOTPSevice.......chatGTP...........................
export const VerifyOTPSevice = async (req) => {
  try {
    const email = req.params.email;
    const otp = req.params.otp;

    // Find user with email and otp
    const user = await UserModel.findOne({ email: email, otp: otp }).select(
      "_id"
    );

    if (user) {
      // User Token Create
      const token = EncodeToken(email, user._id.toString());

      // OTP Code Update To 0
      await UserModel.updateOne({ email: email }, { $set: { otp: "0" } });

      return { status: "success", message: "Valid OTP", token: token };
    } else {
      return { status: "fail", message: "Invalid OTP" };
    }
  } catch (error) {
    return { status: "fail", message: error };
  }
};
