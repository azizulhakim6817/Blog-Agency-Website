import mongoose from "mongoose";

const sliderSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: false },
  },
  { timestamps: true, versionKey: false }
);

const SliderModel = mongoose.model("slider", sliderSchema);

export default SliderModel;
