import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";
import { getEmail, setEmail } from "../utility/utility";

let baseURL = "https://blog-agency-website-fawn.vercel.app/api/";

const UserStore = create((set) => ({
  /*Login............................................ */
  RegistarFormData: { email: "", passsword: "", fullName: " " },
  ResiterFormOnChange: async (name, value) => {
    set((state) => ({
      RegistarFormData: {
        ...state.RegistarFormData,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,
  RegistarRequest: async (reqBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`http://localhost:8000/api/Register`, reqBody);
    set({ isFormSubmit: false });
    if (res.data["status"] === "success") {
      set({ RegistarFormData: res.data.data });
      set({ isFormSubmit: false });
    }
    return res.data["status"] === "success";
  },

  LogingFormData: { email: "", passsword: "" },
  LoginFormOnChange: async (name, value) => {
    set((state) => ({
      LogingFormData: {
        ...state.LogingFormData,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,
  LoginRequest: async (reqBody) => {
    set({ isFormSubmit: true });
    let res = await axios.post(`http://localhost:8000/api/Login`, reqBody);
    set({ isFormSubmit: false });
    if (res.data["status"] === "success") {
      Cookies.set("token", res.data.token);
      set({ isFormSubmit: false });
      set({ LogingFormData: res.data.data });
    }
    return res.data["status"] === "success";
  },

  isFormSubmit: false,
  UserOTPRequest: async (email) => {
    set({ isFormSubmit: true });
    let res = await axios.get(`${baseURL}/UserOTP/${email}`);
    setEmail(email);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  /* Logout........................................................... */
  UserLogoutequest: async () => {
    set({ isFormSubmit: true });
    let res = await axios.get(`${baseURL}UserLogout`, {
      headers: { token: Cookies.get("token") },
    });
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  /* OTP verify request............................................ */
  isLogin: () => {
    const token = Cookies.get("token");
    return !!token;
  },

  OTPFormData: { otp: "" },
  OTPFormOnChange: async (name, value) => {
    set((state) => ({
      OTPFormData: {
        ...state.OTPFormData,
        [name]: value,
      },
    }));
  },

  VerifyLoginRequest: async (otp) => {
    set({ isFormSubmit: true });
    let email = getEmail();
    let res = await axios.get(`${baseURL}VerifyLogin/${email}/${otp}`);
    console.log(res);

    if (res.data["status"] === "success") {
      Cookies.set("token", res.data.token);
    }
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },
}));

export default UserStore;
