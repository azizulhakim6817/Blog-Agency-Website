import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema(
  {
    userID: { type: mongoose.Schema.Types.ObjectId, required: true },

    image: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BlogPostMolede = mongoose.model("blogs", blogPostSchema);
export default BlogPostMolede;
