import Search from "./Search/Search";
import Toggle from "./Toggle/Toggle";
import Languages from "./Languages/Language";
import Notification from "./Notification/Notification";
import UserInfo from "./UserInfo/UserInfo";
import "./Topbar.css";
import SidebarLayout from "../Navbar/Slideout/SidebarLayout";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Topbar = ({ userData }) => {
  const [isDesktop, setIsDesktop] = useState();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const updateIsDesktop = (e) => setIsDesktop(e.matches);

    updateIsDesktop(mediaQuery);
    mediaQuery.addEventListener("change", updateIsDesktop);
    return () => mediaQuery.removeEventListener("change", updateIsDesktop);
  }, []);

  return (
    <div className="topbar">
      <SidebarLayout
        Search={<Search />}
        Toggle={<Toggle />}
        Language={<Languages />}
      />
      {!isDesktop && (
        <Link to={"/"} className="AppName">
          Payd
        </Link>
      )}

      {isDesktop && (
        <>
          <Search />
          <Toggle />
          <Languages />
        </>
      )}

      <Notification />
      <UserInfo userData={userData} />
    </div>
  );
};
