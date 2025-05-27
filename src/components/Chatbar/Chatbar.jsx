import { useRef, useState } from "react";
import "./Chatbar.css";
import Card from "./Card/Card";
import { Messages } from "./messages";

export const Chatbar = () => {
  const [active, setActive] = useState({
    statsStatus: false,
    messageStatus: true,
  });
  const setTabActive = ({ tab }) => {
    setActive({
      statsStatus: tab === "statsStatus",
      messageStatus: tab === "messageStatus",
    });
  };
  return (
    <>
      <div className="chatbarContainer">
        <div className="chatTabs">
          <button
            className={`stats ${active.statsStatus ? "activetab" : "tab"}`}
            onClick={() => setTabActive({ tab: "statsStatus" })}
          >
            Stats
          </button>
          <button
            className={`messages ${active.messageStatus ? "activetab" : "tab"}`}
            onClick={() => setTabActive({ tab: "messageStatus" })}
          >
            Messages
          </button>
        </div>
        {active.messageStatus ? (
          <div className="messageBox">
            {Messages.map(({ userName, message, timeStamp }, index) => (
              <Card
                key={index}
                userName={userName}
                message={message}
                timeStamp={timeStamp}
              />
            ))}
          </div>
        ) : (
          <div className="messageBox">
            sdjhfkjdhkj
            {Messages.map(({ userName, message, timeStamp }, index) => (
              <Card
                key={index}
                userName={userName}
                message={message}
                timeStamp={timeStamp}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
