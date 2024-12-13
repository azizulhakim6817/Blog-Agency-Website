import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";


let baseURL = "https://blog-agency-website-lake.vercel.app/api/"; 

const BlogStore = create((set) => ({
  BlogList: null,

  // Fetch the list of blogs
  BlogListRequest: async () => {
    try {
      const res = await axios.get(`${baseURL}readBlog`);
      if (res.data.status === "success") {
        set({ BlogList: res.data.data });
      }
    } catch (error) {
      console.error("Error fetching blog list:", error);
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
      const res = await axios.post(`${baseURL}creat-blog`, postBody, {
        headers: {
          token: Cookies.get("token"),
        },
      });
      if (res.data.status === "success") {
        set({ BlogList: res.data.data });
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  },

  // Update an existing blog
  updateBlogRequest: async (id, reqBody) => {
    try {
      const url = `${baseURL}blog-update/${id}`;
      const res = await axios.post(url, reqBody, {
        headers: { token: Cookies.get("token") },
      });

      return res.data.status === "success";
    } catch (err) {
      console.error("Error updating blog:", err);
      // Handle unauthorized access here if needed
    }
  },

  // Delete a blog
  DeleteBlogRequest: async (BlogId) => {
    try {
      const res = await axios.get(`${baseURL}blog-delete/${BlogId}`, {
        headers: {
          token: Cookies.get("token"),
        },
      });
      if (res.data.status === "success") {
        set({ BlogList: res.data.data });
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  },

  // Fetch blog details
  BlogDetails: null,
  BlogDetailsRequest: async (BlogId) => {
    try {
      const res = await axios.get(`${baseURL}BlogsDetails/${BlogId}`, {
        headers: {
          token: Cookies.get("token"),
        },
      });
      if (res.data.status === "success") {
        set({ BlogDetails: res.data.data });
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  },
}));

export default BlogStore;
