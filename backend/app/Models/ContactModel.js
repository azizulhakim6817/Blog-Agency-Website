import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firsName: { type: String },
    lastName: { type: String },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ContactModel = mongoose.model("contact", contactSchema);

export default ContactModel;
