import "./Search.css";
import * as Icons from "../../../assets/icons/Topbar/index";
import { useState } from "react";
import { SearchAPI } from "../../../api/Topbar";
export default function Search() {
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
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
