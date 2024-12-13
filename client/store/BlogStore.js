import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";

<<<<<<< HEAD
let baseURL = "https://blog-agency-website-lake.vercel.app/api/";
=======
let baseURL = "https://blog-agency-website-five.vercel.app/api/";
>>>>>>> 9f9600c17b22a24f70278a53a7228e5dc610b6c6

const BlogStore = create((set) => ({
  BlogList: null,
  BlogListRequest: async () => {
    let res = await axios.get(`${baseURL}readBlog`);
    if (res.data["status"] === "success") {
      set({ BlogList: res.data.data });
    }
  },

  // Store for new blog form values
  BlogFormValue: {
    title: "",
    description: "",
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
      let res = await axios.post(`${baseURL}creat-blog`, postBody, {
        headers: {
          token: Cookies.get("token"),
        },
      });
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
      let url = `${baseURL}blog-update/${id}`;
      let res = await axios.post(url, reqBody, {
        headers: { token: Cookies.get("token") },
      });

      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    }
  },

  // Delete a blogs
  DeleteBlogRequest: async (BlogId) => {
    try {
      let res = await axios.get(`${baseURL}blog-delete/${BlogId}`, {
        headers: {
          token: Cookies.get("token"),
        },
      });
      if (res.data["status"] === "success") {
        set({ BlogList: res.data["data"] });
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  },
  // Blog Details dsafafdfa dafadsf................................................
  BlogDetails: null,
  BlogDetailsRequest: async (BlogId) => {
    let res = await axios.get(`${baseURL}BlogsDetails/${BlogId}`, {
      headers: {
        token: Cookies.get("token"),
      },
    });
    if (res.data["status"] === "success") {
      set({ BlogDetails: res.data["data"] });
    }
  },
}));

export default BlogStore;
