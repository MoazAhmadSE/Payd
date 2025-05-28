import { useState } from "react";
import Menubar from "../../Topbar/Menubar/Menubar";
import { Navbar } from "../Navbar";
import "./SidebarLayout.css";

export default function SidebarLayout({ Search, Toggle, Language }) {
  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <Menubar showNavbar={showNavbar} setShowNavbar={setShowNavbar} />

      <div className={`sidebaroverlaywrapper ${showNavbar ? "visible" : ""}`}>
        <div className="sidebaroverlay" onClick={() => setShowNavbar(false)} />
        <div className="sidebardrawer">
          <Navbar
            setShowNavbar={setShowNavbar}
            Search={Search}
            Toggle={Toggle}
            Language={Language}
          />
        </div>
      </div>
    </>
  );
}
