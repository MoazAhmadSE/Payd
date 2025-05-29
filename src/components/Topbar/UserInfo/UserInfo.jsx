import { useState, useEffect } from "react";
import "./UserInfo.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import userImage from "../../../assets/Images/user1.png";
import { useUser } from "../../../context/UserInfo";

export default function UserInfo() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const { user } = useUser();

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
