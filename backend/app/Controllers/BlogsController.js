import {
  createBlogService,
  readBlogService,
  deleteBlogService,
  updateBlogService,
} from "./../Service/BlogsService.js";

//! create service........................................
export const blog = async (req, res) => {
  let result = await createBlogService(req);
  return res.json(result);
};
//! Read Services service........................................
export const readBlog = async (req, res) => {
  let result = await readBlogService(req);
  return res.json(result);
};
//! blog-update service........................................
export const updateBlog = async (req, res) => {
  let result = await updateBlogService(req);
  return res.json(result);
};
//! create service........................................
export const deleteBlog = async (req, res) => {
  let result = await deleteBlogService(req);
  return res.json(result);
};
