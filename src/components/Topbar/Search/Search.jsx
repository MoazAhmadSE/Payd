import "./Search.css";
import * as Icons from "../../../assets/icons/Topbar/index";

export default function Search() {
  return (
    <>
      <div className="searchContainer">
        {/* <div className="searchWrapper"> */}
          <Icons.Search className="searchIcon" />
          <input type="text" placeholder="Search" />
        {/* </div> */}
      </div>
    </>
  );
}
