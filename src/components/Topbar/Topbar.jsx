import Search from "./Search/Search";
import Toggle from "./Toggle/Toggle";
import Languages from "./Languages/Language";
import Notification from "./Notification/Notification";
import UserInfo from "./UserInfo/UserInfo";
import "./Topbar.css";
import Menubar from "./Menubar/Menubar";
import SidebarLayout from "../Navbar/Slideout/SidebarLayout";
import { useState, useEffect } from "react";

export const Topbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 767);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 767);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="topbar">
      <SidebarLayout
        Search={<Search />}
        Toggle={<Toggle />}
        Language={<Languages />}
      />
      <div className="AppName">Payd</div>

      {isDesktop && (
        <>
          <Search />
          <Toggle />
          <Languages />
        </>
      )}

      <Notification />
      <UserInfo />
    </div>
  );
};
