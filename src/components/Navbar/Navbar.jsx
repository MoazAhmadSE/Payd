import { Link } from "react-router-dom";
import "./Navbar.css";
import * as Icons from "../../assets/icons/Navbar/index";
import { useState } from "react";
import NavbarLink from "./NavbarLink";
import { otherLinks, paymentLinks } from "../../utils/NavbarLinks";

export const Navbar = ({ setShowNavbar, Search, Toggle, Language }) => {
  const [dropDown, setDropDown] = useState({
    isPaymentsOpen: true,
    isCommerceOpen: false,
  });

  return (
    <div className="navbar">
      <Link to={"/"} className="montserrat-appname">
        Payd
      </Link>
      <div className="navbar-close-btn" onClick={() => setShowNavbar(false)}>
        ✕
      </div>

      {window.innerWidth <= 767 && (
        <div className="TopbarComponents">
          <hr className="line" style={{ marginBlock: "0px" }} />
          {Search}
          <hr className="line" style={{ marginBlock: "0px" }} />
          <div className="Inner">
            {Language}
            {Toggle}
          </div>
          <hr className="line" style={{ marginBlock: "0px" }} />
        </div>
      )}

      <div>
        <div
          className="navbar-catagory"
          style={{ marginTop: "30px" }}
          onClick={() =>
            setDropDown((prev) => ({
              ...prev,
              isPaymentsOpen: !prev.isPaymentsOpen,
            }))
          }
        >
          <h2 className="navbar-catagory-name">Payments</h2>
          <Icons.Dropdown
            className={`navbarSvgdropdown ${
              dropDown.isPaymentsOpen ? "" : "rotate"
            } `}
          />
        </div>
        <div
          className={`navbar-links-container slide ${
            dropDown.isPaymentsOpen ? "open" : "closed"
          }`}
        >
          <div className="links_Container">
            {paymentLinks.map(({ to, Icon, label }) => (
              <NavbarLink key={to} to={to} IconComponent={Icon} label={label} />
            ))}
          </div>
        </div>
        <hr className="line" />
        <div
          className="navbar-catagory"
          onClick={() =>
            setDropDown((prev) => ({
              ...prev,
              isCommerceOpen: !prev.isCommerceOpen,
            }))
          }
        >
          <h2 className="navbar-catagory-name">Commerce</h2>
          <Icons.Dropdown
            className={`navbarSvgdropdown ${
              dropDown.isCommerceOpen ? "" : "rotate"
            } `}
          />
        </div>
        <div
          className={`navbar-links-container slide ${
            dropDown.isCommerceOpen ? "open" : "closed"
          }`}
        >
          <div className="links_Container">
            {paymentLinks.map(({ to, Icon, label }) => (
              <NavbarLink key={to} to={to} IconComponent={Icon} label={label} />
            ))}
          </div>
        </div>
        <hr className="line" />
        <div className="navbar-links-container">
          <div className="links_Container">
            {otherLinks.map(({ to, Icon, label }) => (
              <NavbarLink key={to} to={to} IconComponent={Icon} label={label} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
