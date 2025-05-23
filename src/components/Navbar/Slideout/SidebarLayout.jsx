import { useState } from "react";
import Menubar from "../../Topbar/Menubar/Menubar";
import { Navbar } from "../Navbar";
import "./SidebarLayout.css";

export default function SidebarLayout() {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <Menubar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />

      <div className={`sidebar-overlay-wrapper ${showNavbar ? "visible" : ""}`}>
        <div
          className="sidebar-overlay"
          onClick={() => setShowNavbar(false)}
        />
        <div className="sidebar-drawer">
          <Navbar setShowNavbar={setShowNavbar} />
          {console.log("Navbar shown:", showNavbar)}
        </div>
      </div>
    </>
  );
}
