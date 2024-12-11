import React from "react";
import profileLogo from "../../../assets/images/profile.png";
import Dropdown from "react-bootstrap/Dropdown";
import UserStore from "./../../../../store/UserStore";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { IoIosLogOut } from "react-icons/io";

const AdminProfile = () => {
  const Navigate = useNavigate();
  const { UserLogoutequest } = UserStore();

  const logoutBtn = async () => {
    await UserLogoutequest();
    sessionStorage.clear();
    localStorage.clear();
    Cookies.remove("token");
    Navigate("/SubLogin");
    toast.success("Logout Succsssfully");
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant=""
          id="dropdown-basic "
          className=" btn-outline-none border-0"
        >
          <img
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
            src={profileLogo}
            alt="profile"
          />
        </Dropdown.Toggle>

        <Dropdown.Menu className=" bg-transparent btn-outline-none border-0">
          <Dropdown.Item className=" bg-transparent btn-outline-none border-0 text-center">
            <button
              className=" btn btn-danger   btn-outline-none border-0"
              onClick={logoutBtn}
            >
              Logout
              <IoIosLogOut className=" ms-2" />
            </button>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default AdminProfile;
