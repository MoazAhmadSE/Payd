import Search from "./Search/Search";
import Toggle from "./Toggle/Toggle";
import Languages from "./Languages/Language";
import Notification from "./Notification/Notification";
import UserInfo from "./UserInfo/UserInfo";
import "./Topbar.css";
import Menubar from "./Menubar/Menubar";
import SidebarLayout from "../Navbar/Slideout/SidebarLayout";

export const Topbar = () => {
  return (
    <div className="topbar">
      {/* <Menubar/> */}
      <SidebarLayout/>
      <Search />
      <Toggle />
      <Languages />
      <Notification />
      <UserInfo />
    </div>
  );
};
