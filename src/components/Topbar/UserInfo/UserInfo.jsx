import { useState } from "react";
import "./UserInfo.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import userImage from "../../../assets/Images/user1.png";

export default function UserInfo() {
  const [userData, setUserData] = useState({
    name: "Muhammad Asad Ashraf",
    id: "123456789",
  });
  return (
    <div className="userContainer">
      <img src={userImage} className="userImage" />
      <div className="userNameansId">
        <div className="userName">{userData.name}</div>
        <div className="UserId">ID: {userData.id}</div>
      </div>
      <Icons.Dropdown />
    </div>
  );
}
