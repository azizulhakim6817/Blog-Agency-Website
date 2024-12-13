import {
  createBlogService,
  readBlogService,
  deleteBlogService,
  updateBlogService,
  BlogsDetailsService,
} from "./../Service/BlogsService.js";

//! create Blog.....................................
export const blog = async (req, res) => {
  let result = await createBlogService(req);
  return res.json(result);
};
//! Read Blogs.......................................
export const readBlog = async (req, res) => {
  let result = await readBlogService(req);
  return res.json(result);
};
//! blog-update Blog....................................
export const updateBlog = async (req, res) => {
  let result = await updateBlogService(req);
  return res.json(result);
};
//! delete Blog........................................
export const deleteBlog = async (req, res) => {
  let result = await deleteBlogService(req);
  return res.json(result);
};

//! Details Blogs .........................................
export const BlogsDetails = async (req, res) => {
  let result = await BlogsDetailsService(req);
  return res.json(result);
};
