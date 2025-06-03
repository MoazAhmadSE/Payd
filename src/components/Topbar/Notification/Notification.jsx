import { useEffect, useMemo, useRef, useState } from "react";
import "./Notification.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import NotificationCard from "./NotificationCard/NotificationCard";
import {
  DashboardApi,
  updateNotificationData,
} from "../../../api/DashboardApi";
import moment from "moment";

export default function Notification() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notification, setNotification] = useState({});
  const dropDonwRef = useRef();
  const handleClickOutside = (e) => {
    if (dropDonwRef.current && !dropDonwRef.current.contains(e.target)) {
      setShowNotifications(false);
    }
  };

  useEffect(() => {
    const fetchNotification = async () => {
      try {
        const data = await DashboardApi("notifications");
        const notifs = data?.data;
        if (notifs && typeof notifs === "object") {
          setNotification(notifs);
        } else {
          setNotification({});
        }
      } catch (err) {
        console.error("Failed to fetch notifications", err);
        setNotification({});
      }
    };
    fetchNotification();
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const todaysNotification = useMemo(() => {
    return Object.entries(notification).filter(([, notification]) => {
      return moment().diff(moment(notification.timeStamp), "hours") < 24;
    });
  }, [notification]);

  const sortedNotification = useMemo(() => {
    return [...todaysNotification].sort(
      (a, b) => new Date(b[1]?.timeStamp) - new Date(a[1]?.timeStamp)
    );
  }, [todaysNotification]);

  const unreadNotifications = sortedNotification.some(
    ([, value]) => !value?.isOpen
  );

  const handleClick = (index) => {
    if (!notification[index].isOpen) {
      setNotification((prev) => ({
        ...prev,
        [index]: {
          ...prev[index],
          isOpen: true,
        },
      }));
      updateNotificationData("upadateNofData", index);
    }
  };

  return (
    <div className="bellIconContainer" ref={dropDonwRef}>
      <div className="box">
        <div
          className="bellIcon"
          onClick={() => setShowNotifications(!showNotifications)}
        >
          <Icons.BellIcon className="Icon" />
        </div>
        {unreadNotifications && <div className="notification"></div>}
        {showNotifications && (
          <div className="notificationsContainer">
            {sortedNotification.map(([key, value]) => (
              <NotificationCard
                key={key}
                data={[key, value]}
                onClick={handleClick}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
