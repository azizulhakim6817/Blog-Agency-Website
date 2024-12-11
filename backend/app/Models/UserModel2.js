import mongoose from "mongoose";

const dataSchema = mongoose.Schema(
  {
    email: { type: String, unique: true },
    otp: { type: String, default: "0" },
  },

  { timestamps: true, versionKey: false }
);

const UserModel = mongoose.model("users", dataSchema);

export default UserModel;
