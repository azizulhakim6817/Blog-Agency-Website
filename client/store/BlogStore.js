import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

const BlogStore = create((set) => ({
  BlogList: null,
  BlogListRequest: async () => {
    let res = await axios.get(`http://localhost:8000/api/readBlog`);
    if (res.data["status"] === "success") {
      set({ BlogList: res.data.data });
    }
  },

  // Store for new blog form values
  BlogFormValue: {
    title: "",
    author: "",
    description: "",
    date: "",
    image: "", // Image URL or file path
  },

  // Update the form value on input change
  BlogFormOnChange: (name, value) => {
    set((state) => ({
      BlogFormValue: {
        ...state.BlogFormValue,
        [name]: value,
      },
    }));
  },

  // Create a new blog
  CreateBlogRequest: async (postBody) => {
    try {
      let res = await axios.post(
        "http://localhost:8000/api/creat-blog",
        postBody,
        {
          headers: {
            token: Cookies.get("token"),
          },
        }
      );
      console.log(res);
      if (res.data["status"] === "success") {
        set({ BlogList: res.data["data"] });
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  },

  // Update an existing blog
  updateBlogRequest: async (id, reqBody) => {
    try {
      console.log(id);
      let url = `http://localhost:8000/api/blog-update/${id}`;
      let res = await axios.post(url, reqBody, {
        headers: { token: Cookies.get("token") },
      });
      console.log(res);
      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    }
  },

  // Delete a blog
  DeleteBlogRequest: async (BlogId) => {
    try {
      let res = await axios.get(
        `http://localhost:8000/api/blog-delete/${BlogId}`,
        {
          headers: {
            token: Cookies.get("token"),
          },
        }
      );
      if (res.data["status"] === "success") {
        set({ BlogList: res.data["data"] }); // Update BlogList after deletion
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  },
}));

export default BlogStore;
