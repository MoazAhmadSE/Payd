import { useState } from "react";
import Menubar from "../../Topbar/Menubar/Menubar";
import { Navbar } from "../Navbar";
import "./SidebarLayout.css";

export default function SidebarLayout({ Search, Toggle, Language }) {
  const [showNavbar, setShowNavbar] = useState(false);
  console.log({ Search, Toggle, Language })

  return (
    <>
      <Menubar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />

      <div className={`sidebar-overlay-wrapper ${showNavbar ? "visible" : ""}`}>
        <div className="sidebar-overlay" onClick={() => setShowNavbar(false)} />
        <div className="sidebar-drawer">
          <Navbar
            setShowNavbar={setShowNavbar}
            Search={Search}
            Toggle={Toggle}
            Language={Language}
          />
          {console.log("Navbar shown:", showNavbar)}
        </div>
      </div>
    </>
  );
}
