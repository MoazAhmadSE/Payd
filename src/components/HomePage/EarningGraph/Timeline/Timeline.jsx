import { useEffect, useMemo, useRef, useState } from "react";
import * as Icons from "../../../../assets/icons/Homepage/index";
import "./Timeline.css";
import { useT } from "../../../../context/TranslationContext";

export default function Timeline({ selectedRangeKey, setSelectedRangeKey }) {
  const t = useT();
  const ranges = useMemo(() => t("timeLines", { returnObjects: true }), [t]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleRangeSelect = (key) => {
    setSelectedRangeKey(key);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") setIsDropdownOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="timelineContainer" ref={dropdownRef}>
      <h3 className="duration">{t(`timeLines.${selectedRangeKey}`)}</h3>
      <div className="dropdownIcon" onClick={toggleDropdown}>
        <Icons.TimelineDropdown
          className={`${isDropdownOpen ? "rotate" : ""}`}
        />
      </div>

      {isDropdownOpen && (
        <div className="dropdownMenu">
          {Object.entries(ranges).map(([key, value], index, arr) => (
            <div className="innerDropdownMenu" key={key}>
              <div
                className={`range ${
                  selectedRangeKey === key ? "selected" : ""
                }`}
                onClick={() => handleRangeSelect(key)}
              >
                {value}
              </div>
              {index !== arr.length - 1 && <hr className="braker" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
