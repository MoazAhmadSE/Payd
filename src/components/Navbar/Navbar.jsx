import "./Navbar.css";
import * as Icons from "../../assets/icons/Navbar/index";
import NavbarLink from "./NavbarLink";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SVGIcons } from "../../assets/icons/SVGIcons";

export const Navbar = ({ setShowNavbar, Search, Toggle, Language }) => {
  const { t } = useTranslation();
  const [dropDown, setDropDown] = useState({
    Payments: true,
    Commerce: false,
  });
  const [selectedKey, setSelectedKey] = useState(null);

  const navbarLinks = t("navbarLinks", { returnObjects: true });

  const toggleCategory = (category) => {
    setDropDown((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const selected = (key) => {
    setSelectedKey(key);
  };

  return (
    <div className="navbar">
      <div className="appNameContainer">
        <Link to="/" className="montserrat-appname">
          {t("appName")}
        </Link>
      </div>
      <div className="navbar-close-btn" onClick={() => setShowNavbar(false)}>
        ✕
      </div>
      <div className="TopbarComponents">
        <hr className="line1" />
        {Search}
        <hr className="line1" />
        <div className="Inner">
          {Language}
          {Toggle}
        </div>
        <hr className="line1" />
      </div>

      <div className="linksContainer">
        {Object.entries(navbarLinks).map(([category, links], index, arr) => {
          const isLastCategory = index === arr.length - 1;
          const hasCategoryTitle = category.trim() !== "";

          return (
            <>
              <div key={category || `category-${index}`}>
                {hasCategoryTitle && (
                  <div
                    className="navbar-catagory"
                    // style={{ marginTop: "30px" }}
                    onClick={() => toggleCategory(category)}
                  >
                    <h2 className="navbar-catagory-name">{category}</h2>
                    <SVGIcons.dropDown
                      className={`navbarSvgdropdown ${
                        dropDown[category] ? "" : "rotate"
                      }`}
                    />
                  </div>
                )}

                <div
                  className={`navbar-links-container slide ${
                    dropDown[category] || !hasCategoryTitle ? "open" : "closed"
                  }`}
                >
                  <div className="links_Container">
                    {Object.entries(links).map(([key, item]) => (
                      <NavbarLink
                        key={key}
                        to={item.to}
                        IconComponent={SVGIcons[item.icon]}
                        label={item.label}
                        setShowNavbar={setShowNavbar}
                        isSelected={selectedKey === key}
                        onClick={() => selected(key)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {!isLastCategory && hasCategoryTitle && <hr className="line" />}
            </>
          );
        })}
      </div>
    </div>
  );
};
