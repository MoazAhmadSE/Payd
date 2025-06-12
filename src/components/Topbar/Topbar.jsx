import "./Topbar.css";
import Search from "./Search/Search";
import Toggle from "./Toggle/Toggle";
import Languages from "./Languages/Language";
import Notification from "./Notification/Notification";
import UserInfo from "./UserInfo/UserInfo";
import SidebarLayout from "../Navbar/Slideout/SidebarLayout";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Topbar = ({ userData }) => {
  const { t } = useTranslation();
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

      <Notification />
      <UserInfo userData={userData} />
    </div>
  );
};
