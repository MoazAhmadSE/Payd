import {Search} from "./Search/Search";
import Toggle from "./Toggle/Toggle";
import Languages from "./Languages/Language";
import Notification from "./Notification/Notification";
import UserInfo from "./UserInfo/UserInfo";
import SidebarLayout from "../Navbar/Slideout/SidebarLayout";
import { Link } from "react-router-dom";
import { useT } from "../../context/TranslationContext";
import "./Topbar.css";

export const Topbar = ({
  userData,
  setShowChatbar,
  showChatbar,
  hasUnreadMessages,
}) => {
  const t = useT();
  return (
    <div className="topbar-container">
      <SidebarLayout
        Search={<Search />}
        Toggle={<Toggle />}
        Language={<Languages />}
      />

      <Link to={"/"} className="app-name">
        {t("appName")}
      </Link>

      <div className="ser-tog-lan-container">
        <Search />
        <Toggle />
        <Languages />
      </div>

      <Notification
        setShowChatbar={setShowChatbar}
        showChatbar={showChatbar}
        hasUnreadMessages={hasUnreadMessages}
      />
      <UserInfo userData={userData} />
    </div>
  );
};
