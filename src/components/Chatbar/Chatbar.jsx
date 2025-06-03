import React from "react";
import "./Chatbar.css";
import * as Icons from "../../assets/icons/Card/index";
import Card from "./Card/Card";
import { useChatbar } from "../../hook/useChatBar";

export const Chatbar = () => {
  const { chat, active, setTabActive, sortedMessages, handleClick } = useChatbar();

  const renderCards = (items) => {
    return items.length !== 0 ? (
      items.map(([id, chatContent]) => (
        <Card
          key={id}
          messageid={id}
          userName={chatContent.username}
          message={chatContent.message}
          timeStamp={chatContent.timeStamp}
          isOpen={chatContent.isOpen}
          handleClick={handleClick}
        />
      ))
    ) : (
      <>
        <Icons.Empty style={{ width: "50%" }} />
        <p className="empty">No messages to show.</p>
      </>
    );
  };

  return (
    <div className="chatbarContainer">
      <div className="chatTabs">
        <button
          className={`stats ${active.statsStatus ? "activetab" : "tab"}`}
          onClick={() => setTabActive("statsStatus")}
        >
          Stats
        </button>
        <button
          className={`messages ${active.messageStatus ? "activetab" : "tab"}`}
          onClick={() => setTabActive("messageStatus")}
        >
          Messages
        </button>
      </div>

      <div className="messageBox">
        {active.messageStatus
          ? renderCards(sortedMessages)
          : renderCards(Object.entries(chat.stats))}
      </div>
    </div>
  );
};
