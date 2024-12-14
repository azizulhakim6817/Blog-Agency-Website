import mongoose from "mongoose";
import BlogPostMolede from "./../Models/BlogModel.js";
const ObjectId = mongoose.Types.ObjectId;

//! Create a new blog..............
export const createBlogService = async (req, res) => {
  try {
    let user_id = new ObjectId(req.headers.user_id);
    let reqBody = req.body;
    reqBody.userID = user_id;

    const newBlog = await BlogPostMolede.create(reqBody);

    return { status: "success", data: newBlog };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Read all blog........................................
export const readBlogService = async (req, res) => {
  try {
    const services = await BlogPostMolede.find({});

    return { status: "success", data: services };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Update a blog.............................................
export const updateBlogService = async (req, res) => {
  let blogID = req.params.blogID;
  let reqBody = req.body;
  try {
    const blog = await BlogPostMolede.findByIdAndUpdate(blogID, reqBody, {
      new: true,
    });
    if (!blog) {
      throw "Update is notfound!";
    }

    return { status: "success", data: blog };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Delete a blog.........................................
export const deleteBlogService = async (req, res) => {
  const blogID = req.params.blogID;
  let query = { _id: blogID };
  try {
    let data = await BlogPostMolede.deleteOne(query);
    return { status: "success", data: data };
  } catch (e) {
    return { status: "error", error: e.toString() };
  }
};

//! Blogs Details ......................................
export const BlogsDetailsService = async (req, res) => {
  try {
    let blogID = new ObjectId(req.params.blogID);
    let MatchStage = { $match: { _id: blogID } };

    let JoinWithBrandStage = {
      $lookup: {
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "user",
      },
    };

    let UnwindBrandStage = { $unwind: "$user" };

    let BlogUserProjectionStage = {
      $project: {
        _id: 1,
        title: 1,
        author: 1,
        date: 1,
        image: 1,
        createdAt: 1,
        description: 1,
        "user.fullName": 1,
      },
    };

    let data = await BlogPostMolede.aggregate([
      MatchStage,
      JoinWithBrandStage,
      UnwindBrandStage,
      BlogUserProjectionStage,
    ]);

    return {
      status: "success",
      message: "Blog Detail Successfully",
      data: data,
    };
  } catch (err) {
    return {
      status: "failed",
      messages: "Blog Details Failed",
      error: err.toString(),
    };
  }
};
