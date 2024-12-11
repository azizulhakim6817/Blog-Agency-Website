import { EncodeToken } from "../utility/tokenUtility.js";
import EmailSend from "./../utility/emailUtilety.js";
import UserModel from "./../Models/UserModel2.js";

// Login service .........................
export const RegisterService = async (req, res) => {
  try {
    let reqBody = req.body;

    let user = await UserModel.findOne({ email: reqBody.email });

    if (user) {
      return {
        status: "failed",
        message: "Email already exists",
      };
    }
    if (!reqBody.email || !reqBody.password || !reqBody.fullName) {
      return {
        status: "failed",
        message: "All fields are required",
      };
    }
    const data = await UserModel.create(reqBody);
    return {
      status: "success",
      message: "User registration successfully!",
      data: data,
    };
  } catch (err) {
    return {
      status: "failed",
      error: err.toString(),
    };
  }
};

export const LoingService = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await UserModel.aggregate([
      { $match: { email: email, password: password } },
    ]);
    if (user) {
      let token = EncodeToken(user[0]["email"], user[0]["_id"]);
      let options = {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      };
      res.cookie("token", token, options);

      return {
        status: "success",
        message: "Login Successfully",
        token: token,
      };
    } else {
      return {
        status: "failed",
        message: "User Not Found",
      };
    }
  } catch (err) {
    return {
      status: "failed",
      message: "service login failed",
      error: err.toString(),
    };
  }
};

//UserOTPService.....................................
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
