import { useState, useEffect } from "react";
import "./UserInfo.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import userImage from "../../../assets/Images/user1.png";
import LogoutBtn from "./Logout/LogoutBtn";

export default function UserInfo({ userData }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const update = (e) => setIsDesktop(e.matches);

    update(mediaQuery);
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return (
    <div className={`userContainer ${showDropdown ? "dropdown" : ""}`}>
      {isDesktop ? (
        <>
          {!showDropdown && (
            <>
              <img src={userImage} className="userImage" alt="User" />
              <div className="userNameandId">
                <div className="userName">{userData?.name}</div>
                <div className="UserId">ID: {userData?.id}</div>
              </div>
              <Icons.Dropdown
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              />
            </>
          )}
          {showDropdown && (
            <div className="logoutcontainer">
              <div className="logoutBtn">
                <LogoutBtn />
              </div>
              <div
                className="cross"
                onClick={() => {
                  setShowDropdown(!showDropdown);
                }}
              >
                ✕
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <img
            src={userImage}
            className="userImage"
            alt="User"
            onClick={() => setShowDropdown(!showDropdown)}
          />
          {showDropdown && (
            <div className="dropdownContent">
              <div className="userName">{userData?.name}</div>
              <div className="UserId">ID: {userData?.id}</div>
              <hr />
              <LogoutBtn />
            </div>
          )}
        </>
      )}
    </div>
  );
}
