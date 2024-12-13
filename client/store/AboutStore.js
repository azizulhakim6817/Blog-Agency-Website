import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utility/utility.js";
import Cookies from "js-cookie";

let baseURL = "https://blog-agency-website-lake.vercel.app/api/";

//!-----create-team-------------------------------------------
const TeamStore = create((set) => ({
  TeamsList: null,
  TeamsListRequest: async () => {
    let res = await axios.get(`${baseURL}read-teams`);
    if (res.data["status"] === "success") {
      set({ TeamsList: res.data["data"] });
    }
  },

  //!-----TeamFromValue .....................................
  TeamFromValue: {
    name: "",
    role: "",
    rating: "",
    description: "",
    image: "",
  },

  //!-----TeamFormOnChange .....................................
  TeamFormOnChange: (name, value) => {
    set((state) => ({
      TeamFromValue: {
        ...state.TeamFromValue,
        [name]: value,
      },
    }));
  },

  //! create-team -------------------------------------------------
  CreateTeamRequest: async (postBody) => {
    try {
      let res = await axios.post(`${baseURL}creat-teams`, postBody, {
        headers: { token: Cookies.get("token") },
      });

      if (res.data["status"] === success) {
        set({ TeamsList: res.data["data"] });
      }
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  },

  //!--Delete request ----------------------------------------

  DeleteTeamRequest: async (id) => {
    try {
      let res = await axios.get(`${baseURL}team-delete/${id}`, {
        headers: {
          token: Cookies.get("token"),
        },
      });
      if (res.data["status"] === "success") {
        set({ TeamsList: res.data["data"] });
      }
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  },

  //!---team-update-----------------------------------------------
  UpdateTeamRequest: async (id, reqBody) => {
    try {
      let url = `${baseURL}team-update/${id}`;
      let res = await axios.post(url, reqBody, {
        headers: { token: Cookies.get("token") },
      });

      if (res.data.status === "success") {
        set({ TeamFromValue: url.data.data });
      }
      return res.data.status === "success";
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
}));

export default TeamStore;
