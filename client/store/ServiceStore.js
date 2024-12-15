import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";
import { unauthorized } from "../utility/utility.js";

// Resolve the merge conflict
let baseURL = "https://blog-agency-website-lake.vercel.app/api/";

const ServiceStore = create((set) => ({
  ServiceList: null,

  // Fetch the list of services
  ServiceRequest: async () => {
    try {
      const res = await axios.get(`${baseURL}readService`);
      if (res.data.status === "success") {
        set({ ServiceList: res.data.data });
      }
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  },

  // Store for new service form values
  ServiceFormValue: {
    name: "",
    description: "",
    image: "",
  },

  // Update the form value on input change
  ServiceFormOnChange: (name, value) => {
    set((state) => ({
      ServiceFormValue: {
        ...state.ServiceFormValue,
        [name]: value,
      },
    }));
  },

  // Create a new service
  CreateServiceRequest: async (postBody) => {
    try {
      const res = await axios.post(`${baseURL}creat-services`, postBody, {
        headers: { token: Cookies.get("token") },
      });
      if (res.data.status === "success") {
        set({ ServiceList: res.data.data });
      }
    } catch (error) {
      console.error("Error creating service:", error);
    }
  },

  // Update an existing service
  updateServiceRequest: async (id, reqBody) => {
    try {
      const url = `${baseURL}services-update/${id}`;
      const res = await axios.post(url, reqBody, {
        headers: { token: Cookies.get("token") },
      });
      return res.data.status === "success";
    } catch (err) {
      console.error("Error updating service:", err);
      unauthorized(err.response.status);
    }
  },

  // Delete a service
  DeleteServiceRequest: async (id) => {
    try {
      const url = `${baseURL}services-delete/${id}`;
      await axios.get(url, { headers: { token: Cookies.get("token") } });
    } catch (err) {
      console.error("Error deleting service:", err);
      unauthorized(err.response.status);
    }
  },

  // Fetch blog details
  ServiceDetails: null,
  ServiceDetailsRequest: async (serviceID) => {
    try {
      const res = await axios.get(`${baseURL}servicesDetails/${serviceID}`, {
        headers: {
          token: Cookies.get("token"),
        },
      });
      console.log(res);
      if (res.data.status === "success") {
        set({ ServiceDetails: res.data.data });
      }
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  },
}));

export default ServiceStore;
