import { useEffect, useState } from "react";
import { ToggleBtnAPI } from "../../../api/Topbar";
import { useT } from "../../../context/TranslationContext";
import "./Toggle.css";

export default function Toggle() {
  const t = useT();
  const [toggled, setToggled] = useState(false);

  useEffect(() => {
    ToggleBtnAPI(toggled);
  }, [toggled]);

  return (
    <div className="toggle-button-container">
      <button
        className={`toggle-btn ${toggled ? "toggled" : ""}`}
        onClick={() => setToggled(!toggled)}
      >
        <div className="thumb"></div>
      </button>
      <h3 className="toggle-button-text">{t("toggle-text")}</h3>
    </div>
  );
}
