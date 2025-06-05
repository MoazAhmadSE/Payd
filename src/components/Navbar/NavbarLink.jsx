import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarLink = ({ to, IconComponent, label, setShowNavbar }) => {
  return (
    <Link
      to={to}
      className="navbar_Links"
      onClick={() => setShowNavbar && setShowNavbar(false)}
    >
      <IconComponent className="navbar_Svg_Link_Icon" />
      <h3 className="navbar_Links_Name">{label}</h3>
    </Link>
  );
};

export default NavbarLink;
