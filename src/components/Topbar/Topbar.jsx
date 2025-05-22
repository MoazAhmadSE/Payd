import Search from "./Search/Search";
import Toggle from "./Toggle/Toggle";
import Languages from "./Languages/Language";
import Notification from "./Notification/Notification";
import UserInfo from "./UserInfo/UserInfo";
import "./Topbar.css";

export const Topbar = () => {
  return (
    <div className="topbar">
      <Search />
      <Toggle />
      <Languages />
      <Notification />
      <UserInfo />
    </div>
  );
};
