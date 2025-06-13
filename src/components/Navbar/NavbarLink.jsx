import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarLink = ({
  to,
  IconComponent,
  label,
  setShowNavbar,
  // onClick,
  isSelected,
}) => {
  return (
    <Link
      to={to}
      className={`navbar_Links ${isSelected ? "selected-link" : ""}`}
      onClick={(e) => {
        if (setShowNavbar) setShowNavbar(false);
        // if (onClick) onClick(e);
      }}
    >
      <IconComponent className="navbar_Svg_Link_Icon" />
      <h3 className="navbar_Links_Name">{label}</h3>
    </Link>
  );
};

export default NavbarLink;
