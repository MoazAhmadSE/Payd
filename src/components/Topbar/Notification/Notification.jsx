import { useState } from "react";
import "./Notification.css";
import * as Icons from "../../../assets/icons/Topbar/index";

export default function Notification() {
  const [isNotification, setIsNotification] = useState(true);
  return (
    <div className="bellIconContainer">
      <div className="box">
        <div className="bellIcon">
          <Icons.BellIcon className="Icon" />
        </div>
        <div className={`${isNotification ? "notification" : ""}`}></div>
      </div>
    </div>
  );
}
