import * as Icons from "../../../assets/icons/Topbar/index";
import "./Menubar.css";

export default function Menubar({ showNavbar, setShowNavbar }) {
  const handleOnClick = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <div className="Menubar" onClick={handleOnClick}>
      <Icons.Menubar />
    </div>
  );
}
