import "./Notification.css";
import { SVGIcons } from "../../../assets/icons/SVGIcons";

export default function Notification({
  setShowChatbar,
  showChatbar,
  hasUnreadMessages,
}) {
  console.log("from N: ",hasUnreadMessages);
  return (
    <div className="bellIconContainer">
      <div
        className="bellIcon"
        onClick={() => {
          setShowChatbar(!showChatbar);
        }}
      >
        <SVGIcons.bell />
      </div>
      {hasUnreadMessages && <div className="notification"></div>}
    </div>
  );
}
