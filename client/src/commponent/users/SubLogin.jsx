import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserSubmitButton from "./UserSubmitButton";
import UserStore from "../../../store/UserStore";
import ValidationHelper from "../../../utility/ValidationHelper";

const SubLogin = () => {
  let navigate = useNavigate();
  const { LoginRequest, LogingFormData, LoginFormOnChange } = UserStore();

  const onFormSubmit = async () => {
    if (!ValidationHelper.IsEmail(LogingFormData.email)) {
      toast.error("Valid Email Address Required");
    }
    if (!LogingFormData.password) {
      toast.error("Valid Password Required");
    }
    let res = await LoginRequest(LogingFormData);
    if (res === true) {
      navigate("/dashboard");
      toast.success("Login Successful");
    } else {
      navigate("/Sublogin");
      toast.error("Invalid Email or Password");
    }
  };

  return (
    <div className="container section my-4">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5 shadow-lg">
            <h4>Enter Your Email & Password</h4>

            <input
              value={LogingFormData?.email}
              onChange={(e) => {
                LoginFormOnChange("email", e.target.value);
              }}
              placeholder="Email Address"
              type="email"
              className="form-control rounded-5 mb-3"
            />
            <input
              value={LogingFormData?.password}
              onChange={(e) => {
                LoginFormOnChange("password", e.target.value);
              }}
              placeholder="Password"
              type="password"
              className="form-control rounded-5"
            />
            <UserSubmitButton
              onClick={onFormSubmit}
              className="btn mt-3 btnButton"
              text="Login"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubLogin;
