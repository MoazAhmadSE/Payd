import { useState } from "react";
import "./Chatbar.css";
import Card from "./Card/Card";
// import { useUser } from "../../context/UserInfo";
import * as Icons from "../../assets/icons/Card/index";

export const Chatbar = ({ messages }) => {
  // const { messages } = useUser();
  const sotedMessages = messages?.sort((a,b) => new Date(b.timeStamp) - new Date(a.timeStamp));
  const stats = [];

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
            {messages.length !== 0 ? (
              sotedMessages.map(({ userName, message, timeStamp }, index) => (
                <Card
                  key={index}
                  userName={userName}
                  message={message}
                  timeStamp={timeStamp}
                />
              ))
            ) : (
              <>
                <Icons.Empty style={{width: "50%"}} />
                <p className="empty">No messages to show.</p>
              </>
            )}
          </div>
        ) : (
          <div className="messageBox">
            {stats.length !== 0 ? (
              sotedMessages.map(({ userName, message, timeStamp }, index) => (
                <Card
                  key={index}
                  userName={userName}
                  message={message}
                  timeStamp={timeStamp}
                />
              ))
            ) : (
              <>
                <Icons.Empty style={{width: "50%"}} />
                <p className="empty">No messages to show.</p>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
