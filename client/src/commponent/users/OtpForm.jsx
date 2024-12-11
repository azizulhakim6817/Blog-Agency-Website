import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UserStore from "../../../store/UserStore";
import ValidationHelper from "../../../utility/ValidationHelper";
import UserSubmitButton from "./UserSubmitButton";

const OtpForm = () => {
  let navigate = useNavigate();
  let { VerifyLoginRequest, OTPFormOnChange, OTPFormData } = UserStore();

  const onFormSubmit = async () => {
    if (ValidationHelper.IsEmpty(OTPFormData.otp)) {
      toast.error("Valid PIN Required");
    } else {
      let res = await VerifyLoginRequest(OTPFormData.otp);
      res ? navigate("/dashboard") : toast.error("Something Went Wrong !");
    }
  };

  return (
    <div className="container section my-4 ">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5">
          <div className="card p-5 shadow-lg ">
            <h4>Enter Verification Code</h4>
            <p>
              A verification code has been sent to the email address you provide
            </p>
            <input
              value={OTPFormData.otp}
              onChange={(e) => {
                OTPFormOnChange("otp", e.target.value);
              }}
              placeholder="Verification"
              type="text"
              className="form-control rounded-5"
            />
            <UserSubmitButton
              onClick={onFormSubmit}
              submit={false}
              className="btn mt-3 btnButton"
              text="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
