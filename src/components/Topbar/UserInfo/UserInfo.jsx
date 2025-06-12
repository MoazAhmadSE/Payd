import { useState } from "react";
import { SVGIcons } from "../../../assets/icons/SVGIcons";
import userImage from "../../../assets/Images/user1.png";
import LogoutBtn from "./Logout/LogoutBtn";
import "./UserInfo.css";

export default function UserInfo({ userData }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={`userContainer ${showDropdown ? "dropdown" : ""}`}>
      <div className="desktop-userinfo-container">
        <div className="userinfo-content-container">
          <img src={userImage} className="userImage" alt="User" />
          <div className="username-id-container">
            <div className="userNameandId">
              <div className="userName">{userData?.name}</div>
              <div className="UserId">ID: {userData?.id}</div>
            </div>
            <div
              className={`dropdown-svg ${showDropdown ? "rotate" : ""}`}
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            >
              <SVGIcons.polygon />
            </div>
          </div>
        </div>
        {showDropdown && (
          <div className={`logout-button ${showDropdown ? "open" : ""}`}>
            <LogoutBtn />
          </div>
        )}
      </div>
      <div className="mobile-userinfo-container">
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
      </div>
    </div>
  );
}
