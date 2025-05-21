import { Link } from "react-router-dom";

const NavbarLink = ({ to, IconComponent, label }) => {
  return (
    <Link to={to} className="navbar_Links">
      <IconComponent className="navbar_Svg_Link_Icon" />
      <h3 className="navbar_Links_Name">{label}</h3>
    </Link>
  );
};

export default NavbarLink;
