import React from "react";
import { useNavigate } from "react-router";
import useStore from "../STORE/MyStore";
import "../Styles/navbar.css";
import icon from "../Images/user-icon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const navigatePage = (page: string) => {
    navigate(page);
  };
  const currRole = localStorage.getItem("role");
  // const currentUser = useStore((state) => state.currentUser); //This is the previous user that needs to be changed
  const currentUser=useStore.getState().currentUser;
  if (currRole === "USER") {
    return (
      <>
        <div className="navbar-parent">
          <button
            className="nav-btn nav-head-img"
            onClick={() => navigatePage(`/detailed/${currentUser?.id}`)}
          >
            {currentUser?.firstName} {currentUser?.lastName}
          </button>
          <button className="nav-btn" onClick={() => navigatePage("/about")}>
            About
          </button>

          <button className="nav-btn" onClick={() => navigatePage("/contact")}>
            Contact Us
          </button>
          <button
            className="nav-btn"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("role");
              localStorage.removeItem("myCurrentId");
              localStorage.removeItem("currId");
              navigatePage("/login");
            }}
          >
            Logout
          </button>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="navbar-parent">
        <button className="nav-btn" onClick={() => navigatePage("/home")}>
          Home
        </button>
        <button className="nav-btn" onClick={() => navigatePage("/about")}>
          About
        </button>
        <button className="nav-btn" onClick={() => navigatePage("/contact")}>
          Contact Us
        </button>
        <button
          className="nav-btn"
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("role");
            localStorage.removeItem("myCurrentId");
            localStorage.removeItem("currId");
            navigatePage("/login");
          }}
        >
          Logout
        </button>
      </div>
    </>
  );
};

export default Navbar;
