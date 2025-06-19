import { SVGIcons } from "../../../assets/icons/SVGIcons";
import { useLanguage } from "../../../hook/useLanguage";
import "./Language.css";

export default function Language() {
  const { dropdownRef, dropDown, setDropDown, languages } = useLanguage();

  return (
    <div className="language-container" ref={dropdownRef}>
      <div
        className={`language-selector ${
          dropDown.isLanguageSelecterOpen ? "open" : ""
        }`}
        onClick={() =>
          setDropDown((prev) => ({
            ...prev,
            isLanguageSelecterOpen: !prev.isLanguageSelecterOpen,
          }))
        }
      >
        <div>{languages[dropDown.selectedLanguage]}</div>
        <SVGIcons.polygon />
      </div>
      <div
        className={`other-languages-container slide ${
          dropDown.isLanguageSelecterOpen ? "open" : "closed"
        }`}
      >
        {Object.entries(languages).map(([key, language]) => (
          <div key={key}>
            <div
              className={`language ${
                dropDown.selectedLanguage === key ? "selected-language" : ""
              }`}
              onClick={() =>
                setDropDown((prev) => ({
                  ...prev,
                  selectedLanguage: key,
                  isLanguageSelecterOpen: false,
                }))
              }
            >
              {language}
            </div>
            <hr className="language-devider" />
          </div>
        ))}
      </div>
    </div>
  );
}
