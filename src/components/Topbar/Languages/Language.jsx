import "./Language.css";
import languages from "./Languages";
import * as Icons from "../../../assets/icons/Topbar/index";
import { useState } from "react";

export default function Language() {
  const [dropDown, setDropDown] = useState({
    selectedLanguage: "English",
    isLanguageSelecterOpen: false,
    isUserDropdownOpen: false,
  });
  return (
    <div className="languageContainer">
      <div
        className={`languageSelector ${
          dropDown.isLanguageSelecterOpen ? "open" : ""
        }`}
        onClick={() =>
          setDropDown((prev) => ({
            ...prev,
            isLanguageSelecterOpen: !prev.isLanguageSelecterOpen,
          }))
        }
      >
        <div>{dropDown.selectedLanguage}</div>
        <Icons.Dropdown />
      </div>
      <div
        className={`otherLanguagesContainer slide ${
          dropDown.isLanguageSelecterOpen ? "open" : "closed"
        }`}
      >
        {languages.map(({ language }) => (
          <>
            <div
              key={language}
              className="language"
              onClick={() =>
                setDropDown((prev) => ({
                  ...prev,
                  selectedLanguage: language,
                  isLanguageSelecterOpen: false,
                }))
              }
            >
              {language}
            </div>
            <hr className="languageDevider" />
          </>
        ))}
      </div>
    </div>
  );
}
