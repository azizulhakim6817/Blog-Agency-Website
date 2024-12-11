import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utility/utility.js";
import Cookies from "js-cookie";

//!-----create-team-------------------------------------------
const TeamStore = create((set) => ({
  TeamsList: null,
  TeamsListRequest: async () => {
    let res = await axios.get(`http://localhost:8000/api/read-teams`);
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
      let res = await axios.post(
        "http://localhost:8000/api/creat-teams",
        postBody,
        { headers: { token: Cookies.get("token") } }
      );

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
      let url = `http://localhost:8000/api/team-delete/${id}`;
      await axios.get(url, { headers: { token: Cookies.get("token") } });
    } catch (err) {
      unauthorized(err.response.status);
    }
  },

  //!---team-update-----------------------------------------------
  UpdateTeamRequest: async (id, reqBody) => {
    try {
      let url = `http://localhost:8000/api/team-update/${id}`;
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
