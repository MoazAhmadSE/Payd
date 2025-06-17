import "./Notification.css";
import { SVGIcons } from "../../../assets/icons/SVGIcons";
import { useChatbar } from "../../../hook/useChatBar";

export default function Notification({ setShowChatbar, showChatbar }) {
  const { chat } = useChatbar();

  const hasUnreadMessages = Object.values(chat.messages).some(
    (message) => !message?.isOpen
  );

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
