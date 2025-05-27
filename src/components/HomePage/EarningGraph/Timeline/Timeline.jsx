import { useEffect, useRef, useState } from "react";
import * as Icons from "../../../../assets/icons/Homepage/index";
import "./Timeline.css";

export default function Timeline({ selectedRange, setSelectedRange }) {
  const ranges = [
    "Today",
    "This Week",
    "Last 2 Weeks",
    "This Month",
    "This Year",
    "Lifetime",
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleRangeSelect = (range) => {
    setSelectedRange(range);
    setIsDropdownOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="timelineContainer" ref={dropdownRef}>
      <div className="timeline" onClick={toggleDropdown}>
        <h3 className="duration">{selectedRange}</h3>
        <div className={`dropdownIcon ${isDropdownOpen ? "rotate" : ""}`}>
          <Icons.TimelineDropdown />
        </div>
      </div>

      {isDropdownOpen && (
        <div className="dropdownMenu">
          {ranges.map((range) => (
            <div className="innerDropdownMenu" key={range}>
              <div className="range" onClick={() => handleRangeSelect(range)}>
                {range}
              </div>
              <hr className="braker" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
