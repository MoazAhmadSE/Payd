import { useRef, useState } from "react";
import "./Chatbar.css";

export const Chatbar = () => {
  const [active, setActive] = useState({
    statsStatus: false,
    messageStatus: true,
  });
  const setTabActive = ({ tab }) => {
    setActive({
        statsStatus: tab === 'statsStatus',
        messageStatus: tab === 'messageStatus',
    });
  };
  return (
    <>
      <div className="chatbarContainer">
        <div className="chatTabs">
          <button className={`stats ${active.statsStatus ? "activetab" : "tab"}`} onClick={() => setTabActive('statsStatus')}>
            Stats
          </button>
          <button className={`messages ${active.messageStatus ? "activetab" : "tab"}`} onClick={() => setTabActive('messageStatus')}>
            Messages
          </button>
        </div>
        <div className="messageBox"></div>
      </div>
    </>
  );
};
