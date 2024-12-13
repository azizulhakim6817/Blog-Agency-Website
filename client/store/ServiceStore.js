import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";
import { unauthorized } from "../utility/utility.js";

let baseURL = "https://blog-agency-website-lake.vercel.app/api/";

const ServiceStore = create((set) => ({
  ServiceList: null,
  ServiceRequest: async () => {
    let res = await axios.get(`${baseURL}readService`);

    if (res.data["status"] === "success") {
      set({ ServiceList: res.data["data"] });
    }
  },
  // ------------------------create service request --------------------------
  ServiceFormValue: {
    name: "",
    description: "",
    provider: "",
    image: "",
  },
  ServiceFormOnChange: (name, value) => {
    set((state) => ({
      ServiceFormValue: {
        ...state.ServiceFormValue,
        [name]: value,
      },
    }));
  },

  CreateServiceRequest: async (postBody) => {
    try {
      let res = await axios.post(`${baseURL}creat-services`, postBody, {
        headers: { token: Cookies.get("token") },
      });
      if (res.data["status"] === "success") {
        set({ ServiceList: res.data["data"] });
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  },

  updateServiceRequest: async (id, reqBody) => {
    try {
      let url = `${baseURL}services-update/${id}`;
      let res = await axios.post(url, reqBody, {
        headers: { token: Cookies.get("token") },
      });
      return res.data["status"] === "success";
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
  //   -----------------------------------Delete request -----
  DeleteServiceRequest: async (id) => {
    try {
      let url = `${baseURL}services-delete/${id}`;
      await axios.get(url, { headers: { token: Cookies.get("token") } });
    } catch (err) {
      unauthorized(err.response.status);
    }
  },
}));

export default ServiceStore;
