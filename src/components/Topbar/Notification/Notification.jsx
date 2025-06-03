import "./Notification.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import * as Icon from "../../../assets/icons/Card/index";
import NotificationCard from "./NotificationCard/NotificationCard";
import { useNotifications } from "../../../hook/useNotifications";

export default function Notification() {
  const {
    dropdownRef,
    showNotifications,
    setShowNotifications,
    sortedNotification,
    unreadNotifications,
    handleClick,
  } = useNotifications();

  return (
    <div className="bellIconContainer" ref={dropdownRef}>
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
            {sortedNotification.length > 0 ? (
              <>
                {sortedNotification.map(([key, value]) => (
                  <NotificationCard
                    key={key}
                    data={[key, value]}
                    onClick={handleClick}
                  />
                ))}
              </>
            ) : (
              <>
                <Icon.Empty style={{ width: "50%" }} />
                <p className="empty">No Notification to show.</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
