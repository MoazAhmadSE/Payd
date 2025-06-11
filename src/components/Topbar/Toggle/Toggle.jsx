import "./Toggle.css";
import { useEffect, useState } from "react";
import { ToggleBtnAPI } from "../../../api/Topbar";
import { useTranslation } from "react-i18next";

export default function Toggle() {
  const { t } = useTranslation();
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
