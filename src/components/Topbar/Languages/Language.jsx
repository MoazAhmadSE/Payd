import "./Language.css";
import languages from "./Languages";
import * as Icons from "../../../assets/icons/Topbar/index";
import { useEffect, useRef, useState } from "react";

export default function Language() {
  const [dropDown, setDropDown] = useState({
    selectedLanguage: "English",
    isLanguageSelecterOpen: false,
  });
  
  const dropdownRef = useRef();
  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropDown((prev) => ({
        ...prev,
        isLanguageSelecterOpen: false,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="languageContainer" ref={dropdownRef}>
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
          <div key={language}>
            <div
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
          </div>
        ))}
      </div>
    </div>
  );
}
