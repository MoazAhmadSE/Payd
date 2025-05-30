import {  useState } from "react";
import "./Notification.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import NotificationCard from "./NotificationCard/NotificationCard";

export default function Notification() {
  const [showNotifications, setShowNotifications] = useState(false);

  const [notification, setNotification] = useState([
    {
      id: "203485",
      title: "New Update",
      message: "This is a longer notification message...",
      timeStamp: "2025-05-30T12:00:00Z",
      isOpen: false,
    },
    {
      id: "2034855",
      title: "New Update",
      message: "This is a longer notification message...",
      timeStamp: "2025-05-30T12:00:00Z",
      isOpen: true,
    },
    {
      id: "2034sdn85",
      title: "New Update",
      message: "This is a longer notification message...",
      timeStamp: "2025-05-30T12:00:00Z",
      isOpen: false,
    },
  ]);


  const sortedNotification = notification.sort(
    (b, a) => new Date(b.timeStamp) - new Date(a.timeStamp)
  );

  const unreadNotifications = sortedNotification.some((n) => !n.isOpen);

  return (
    <div className="bellIconContainer">
      <div className="box">
        <div
          className="bellIcon"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <Icons.BellIcon className="Icon" />
        </div>
        {unreadNotifications && (
          <div className={`${notification ? "notification" : ""}`}></div>
        )}
        {showNotifications && (
          <div className="notificationsContainer">
            {sortedNotification.map((data, index) => (
              <NotificationCard key={index} data={data} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
