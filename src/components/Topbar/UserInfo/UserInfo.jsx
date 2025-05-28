import { useState, useEffect } from "react";
import "./UserInfo.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import userImage from "../../../assets/Images/user1.png";
import { useUser } from "../../../context/UserInfo";

export default function UserInfo() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { user } = useUser();
 
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`userContainer ${showDropdown ? "dropdown" : ""}`}>
      {windowWidth >= 1024 ? (
        <>
          <img src={userImage} className="userImage" alt="User" />
          <div className="userNameandId">
            <div className="userName">{user.name}</div>
            <div className="UserId">ID: {user.id}</div>
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
              <div className="userName">{user.name}</div>
              <div className="UserId">ID: {user.id}</div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
