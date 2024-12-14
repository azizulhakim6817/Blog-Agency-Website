import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";
import { getEmail, setEmail } from "../utility/utility";


let baseURL = "https://blog-agency-website-lake.vercel.app/api/"; 

const UserStore = create((set) => ({
  // Register Form
  RegistarFormData: { email: "", password: "", fullName: "" },
  RegistarFormOnChange: (name, value) => {
    set((state) => ({
      RegistarFormData: {
        ...state.RegistarFormData,
        [name]: value,
      },
    }));
  },

  isRegisterFormSubmitting: false, // Renamed to avoid duplication
  RegistarRequest: async (reqBody) => {
    set({ isRegisterFormSubmitting: true });
    let res = await axios.post(`${baseURL}Register`, reqBody);
    set({ isRegisterFormSubmitting: false });
    if (res.data["status"] === "success") {
      set({ RegistarFormData: res.data.data });
    }
    return res.data["status"] === "success";
  },

  // Login Form
  LogingFormData: { email: "", password: "" },
  LoginFormOnChange: (name, value) => {
    set((state) => ({
      LogingFormData: {
        ...state.LogingFormData,
        [name]: value,
      },
    }));
  },

  isLoginFormSubmitting: false, 
  LoginRequest: async (reqBody) => {
    set({ isLoginFormSubmitting: true });
    let res = await axios.post(`${baseURL}Login`, reqBody);
    set({ isLoginFormSubmitting: false });
    if (res.data["status"] === "success") {
      Cookies.set("token", res.data.token);
      set({ LogingFormData: res.data.data });
    }
    return res.data["status"] === "success";
  },

  // OTP Request
  isOTPFormSubmitting: false, // Renamed to avoid duplication
  UserOTPRequest: async (email) => {
    set({ isOTPFormSubmitting: true });
    let res = await axios.get(`${baseURL}/UserOTP/${email}`);
    setEmail(email); // Ensure this function is defined in utility.js
    set({ isOTPFormSubmitting: false });
    return res.data["status"] === "success";
  },

  // Logout
  UserLogoutRequest: async () => {
    set({ isFormSubmit: true });
    let res = await axios.get(`${baseURL}UserLogout`, {
      headers: { token: Cookies.get("token") },
    });
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  // OTP Verification
  OTPFormData: { otp: "" },
  OTPFormOnChange: (name, value) => {
    set((state) => ({
      OTPFormData: {
        ...state.OTPFormData,
        [name]: value,
      },
    }));
  },

  VerifyLoginRequest: async (otp) => {
    set({ isFormSubmit: true });
    let email = getEmail(); // Ensure this function is defined in utility.js
    let res = await axios.get(`${baseURL}VerifyLogin/${email}/${otp}`);
    console.log(res);

    if (res.data["status"] === "success") {
      Cookies.set("token", res.data.token);
    }
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  // Check if user is logged in
  isLogin: () => {
    const token = Cookies.get("token");
    return !!token;
  },
}));

export default UserStore;
