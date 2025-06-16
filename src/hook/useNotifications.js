import { useEffect, useMemo, useRef, useState } from "react";
import moment from "moment";
import { DashboardApi, updateNotificationData } from "../api/DashboardApi";
import { useTranslation } from "react-i18next";

export const useNotifications = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notification, setNotification] = useState({});
  const dropdownRef = useRef();
  const { t } = useTranslation();

  const fetchNotification = async () => {
    try {
      const data = await DashboardApi("notifications");
      const notifs = data?.data;
      setNotification(typeof notifs === "object" ? notifs : {});
    } catch (err) {
      console.error("Failed to fetch notifications", err);
      setNotification({});
    }
  };
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowNotifications(false);
    }
  };
  useEffect(() => {
    fetchNotification();
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const todaysNotification = useMemo(() => {
    return Object.entries(notification).filter(([, notif]) =>
      moment().diff(moment(notif.timeStamp), "hours") < 24
    );
  }, [notification]);

  const sortedNotification = useMemo(() => {
    return [...todaysNotification].sort(
      (a, b) => new Date(b[1]?.timeStamp).getTime() - new Date(a[1]?.timeStamp).getTime()
    );
  }, [todaysNotification]);

  const unreadNotifications = sortedNotification.some(
    ([, value]) => !value?.isOpen
  );

  const handleClick = (index) => {
    if (!notification[index]?.isOpen) {
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

  return {
    t,
    dropdownRef,
    showNotifications,
    setShowNotifications,
    sortedNotification,
    unreadNotifications,
    handleClick,
  };
};
