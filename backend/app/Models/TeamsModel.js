import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    image: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    rating: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TeamModel = mongoose.model("teams", userSchema);
export default TeamModel;
