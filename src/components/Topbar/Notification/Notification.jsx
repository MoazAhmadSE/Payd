import "./Notification.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import * as Icon from "../../../assets/icons/Card/index";
import { SVGIcons } from "../../../assets/icons/SVGIcons";
import NotificationCard from "./NotificationCard/NotificationCard";
import { useNotifications } from "../../../hook/useNotifications";
import { motion, AnimatePresence } from "framer-motion";

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
      <div
        className="bellIcon"
        onClick={() => setShowNotifications(!showNotifications)}
      >
        <SVGIcons.bell />
      </div>
      {unreadNotifications && <div className="notification"></div>}

      {/* AnimatePresence enables mount/unmount animations */}
      <AnimatePresence>
        {showNotifications && (
          <motion.div
            key="notification-dropdown"
            className="notificationsContainer"
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-20%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 12 }}
          >
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
