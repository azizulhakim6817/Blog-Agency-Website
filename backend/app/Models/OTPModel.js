import mongoose from "mongoose";
const OTPSchema = mongoose.Schema(
  {
    email: { type: String },
    otp: { type: Number, default: 0 },
    status: { type: Number, default: 0 },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const OTPModel = mongoose.model("otps", OTPSchema);
export default OTPModel;
