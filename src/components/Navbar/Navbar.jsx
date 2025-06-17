import "./Navbar.css";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";
import { SVGIcons } from "../../assets/icons/SVGIcons";
import { useNavbar } from "../../hook/useNavbar";

export const Navbar = ({ setShowNavbar, Search, Toggle, Language }) => {
  const { t, dropDown, navbarLinks, selectedKey, toggleCategory } = useNavbar();

  return (
    <div className="navbar-container">
      <div className="app-name-container">
        <Link to="/" className="appname">
          {t("appName")}
        </Link>
        <SVGIcons.closeButton
          className="navbar-close-btn"
          onClick={() => setShowNavbar(false)}
        />
      </div>
      <div className="links-container">
        <div className="search-toggle-language-container">
          <hr className="ser-togg-lang-line" />
          <div className="search">{Search}</div>
          <hr className="ser-togg-lang-line" />
          <div className="language-toggle-container">
            {Language}
            {Toggle}
          </div>
          <hr className="ser-togg-lang-line" />
        </div>

        <div className="main-links-container">
          {Object.entries(navbarLinks).map(([category, links], index, arr) => {
            const isLastCategory = index === arr.length - 1;
            const hasCategoryTitle = category.trim() !== "";
            return (
              <div key={index}>
                <div key={category || `category-${index}`}>
                  {hasCategoryTitle && (
                    <div
                      className="link-catagory"
                      onClick={() => toggleCategory(category)}
                    >
                      <h2 className="link-catagory-name">{category}</h2>
                      <SVGIcons.dropDown
                        className={`navbar-dropdown-svg ${
                          dropDown[category] ? "" : "rotate"
                        }`}
                      />
                    </div>
                  )}

                  <div
                    className={`slide ${
                      dropDown[category] || !hasCategoryTitle
                        ? "open"
                        : "closed"
                    }`}
                  >
                    <div className="links-container">
                      {Object.entries(links).map(([key, item]) => (
                        <NavbarLink
                          key={key}
                          to={item.to}
                          IconComponent={SVGIcons[item.icon]}
                          label={item.label}
                          setShowNavbar={setShowNavbar}
                          isSelected={selectedKey === key}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {!isLastCategory && hasCategoryTitle && <hr className="line" />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
