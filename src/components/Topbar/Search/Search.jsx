import "./Search.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import { useState } from "react";
import { SearchAPI } from "../../../api/Topbar";
import { useTranslation } from "react-i18next";

export default function Search() {
  const { t } = useTranslation();

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
    <div className="searchContainer">
      <Icons.Search className="searchIcon" />
      <input
        type="text"
        placeholder={t("search-placeholder")}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
