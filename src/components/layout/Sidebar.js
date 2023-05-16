import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { requestPending } from "../../pages/login/authSlice";

export const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnLogout = (e) => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("refreshJWT");
    dispatch(requestPending({}));
  };

  return (
    <div className="sidebar-menu">
      <div className="mt-5">
        <div className="text-center fw-bolder">MyUserAccount</div>
      </div>
      <hr />
      <div className="mt-5">
        <ul>
          <li>
            <Link to="/customerdashboard">
              <i className="fa-solid fa-gauge"></i>Dashboard
            </Link>
          </li>
          <li>
            <Link to="/orderhistory">
              <i className="fa-solid fa-box"></i>Order History
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <i className="fa-solid fa-credit-card"></i>Change Password
            </Link>
          </li>
          <li>
            <Link to="/" onClick={handleOnLogout}>
              <i className="fa-solid fa-gear"></i>Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
