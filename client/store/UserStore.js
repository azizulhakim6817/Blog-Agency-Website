import { create } from "zustand";
import axios from "axios";
import Cookies from "js-cookie";
import { getEmail, setEmail } from "../utility/utility";

const UserStore = create((set) => ({
  /*Login............................................ */

  LogingFormData: { email: "" },
  LoginFormOnChange: async (name, value) => {
    set((state) => ({
      LogingFormData: {
        ...state.LogingFormData,
        [name]: value,
      },
    }));
  },

  isFormSubmit: false,
  UserOTPRequest: async (email) => {
    set({ isFormSubmit: true });
    let res = await axios.get(`http://localhost:8000/api/UserOTP/${email}`);
    setEmail(email);
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },

  /* Logout........................................................... */
  UserLogoutequest: async () => {
    set({ isFormSubmit: true });
    let res = await axios.get(`http://localhost:8000/api/UserLogout`, {
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
    let res = await axios.get(
      `http://localhost:8000/api/VerifyLogin/${email}/${otp}`
    );
    console.log(res);

    if (res.data["status"] === "success") {
      Cookies.set("token", res.data.token);
    }
    set({ isFormSubmit: false });
    return res.data["status"] === "success";
  },
}));

export default UserStore;
