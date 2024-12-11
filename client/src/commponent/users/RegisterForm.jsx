import React from "react";
import UserStore from "../../../store/UserStore";
import toast from "react-hot-toast";
import UserSubmitButton from "./UserSubmitButton";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const Navigate = useNavigate();
  const { RegistarRequest, ResiterFormOnChange, RegistarFormData } =
    UserStore();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    let res = await RegistarRequest(RegistarFormData);
    if (res === true) {
      Navigate("/Sublogin");
      toast.success("Registration successfully");
    }
  };

  return (
    <div className="container section my-4">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5 shadow-lg">
            <label for="fullName">Full Name :</label>
            <input
              id="fullName"
              value={RegistarFormData.fullName}
              onChange={(e) => {
                ResiterFormOnChange("fullName", e.target.value);
              }}
              placeholder="Full name"
              type="text"
              className="form-control rounded-5"
            />
            <label for="email">Email:</label>
            <input
              id="email"
              value={RegistarFormData.email}
              onChange={(e) => {
                ResiterFormOnChange("email", e.target.value);
              }}
              placeholder="Email Address"
              type="email"
              className="form-control rounded-5"
            />
            <label for="password">Password:</label>
            <input
              id="password"
              value={RegistarFormData.password}
              onChange={(e) => {
                ResiterFormOnChange("password", e.target.value);
              }}
              placeholder="password"
              type="password"
              className="form-control rounded-5"
            />
            <UserSubmitButton
              onClick={onFormSubmit}
              className="btn mt-3 btnButton"
              text="Register"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
