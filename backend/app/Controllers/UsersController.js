import { UserOTPService, VerifyOTPSevice } from "./../Service/UsersService.js";

//UserOTP....................................................
export const UserOTP = async (req, res) => {
  let result = await UserOTPService(req);
  return res.status(200).json(result);
};

//VerifyLogin.......................................................
export const VerifyLogin = async (req, res) => {
  let result = await VerifyOTPSevice(req);
  if (result["status"] === "success") {
    // Cookies Option // postman(req) =>  "status": "success",
    let cookieOption = {
      expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
      httpOnly: false,
    };
    res.cookie("token", result["token"], cookieOption); // Set Cookies With Response

    return res.status(200).json(result);
  } else {
    return res.status(200).json(result);
  }
};

//UserLogout............................................................
export const UserLogout = async (req, res) => {
  let cookieOption = {
    expires: new Date(Date.now() - 24 * 6060 * 1000),
    httpOnly: false,
  };
  res.cookie("token", "", cookieOption); // Set Cookies With Response
  return res.status(200).json({ status: "success" });
};
