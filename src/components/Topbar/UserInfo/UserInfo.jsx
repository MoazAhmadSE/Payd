import { useState, useEffect } from "react";
import "./UserInfo.css";
import * as Icons from "../../../assets/icons/Topbar/index"; // Make sure this import works for your Dropdown icon
import userImage from "../../../assets/Images/user1.png";

export default function UserInfo() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [userData] = useState({
    name: "Asad Ashraf",
    id: "123456789",
  });

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`userContainer ${showDropdown ? "dropdown" : ""}`}>
      {windowWidth > 1024 ? (
        <>
          <img src={userImage} className="userImage" alt="User" />
          <div className="userNameandId">
            <div className="userName">{userData.name}</div>
            <div className="UserId">ID: {userData.id}</div>
          </div>
          <Icons.Dropdown />
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
              <div className="userName">{userData.name}</div>
              <div className="UserId">ID: {userData.id}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
