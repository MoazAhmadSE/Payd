import "./Toggle.css";
import { useState } from "react";

export default function Toggle() {
  const [toggled, setToggled] = useState(false);
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
