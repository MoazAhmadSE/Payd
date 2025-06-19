import { SVGIcons } from "../../../assets/icons/SVGIcons";
import { useState } from "react";
import { SearchAPI } from "../../../api/Topbar";
import { useT } from "../../../context/TranslationContext";
import "./Search.css";

export const Search = () => {
  const t = useT();
  const [text, setText] = useState("");

  const handleSearch = () => {
    SearchAPI(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <SVGIcons.search className="search-icon" />
      <input
        type="text"
        placeholder={t("search-placeholder")}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
