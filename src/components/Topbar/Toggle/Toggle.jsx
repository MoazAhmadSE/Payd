import "./Toggle.css";
import { useEffect, useState } from "react";
import { ToggleBtnAPI } from "../../../api/Topbar";

export default function Toggle() {
  const [toggled, setToggled] = useState(false);
  useEffect(() => {
    ToggleBtnAPI(toggled);
  }, [toggled]);

  return (
    <div className="toggleButtonContainer">
      <button
        className={`toggleBtn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
      >
        <div className="thumb"></div>
      </button>
      <h3 className="toggleButtonText">Live</h3>
    </div>
  );
}
