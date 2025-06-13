import React from "react";
import "./Chatbar.css";
import * as Icons from "../../assets/icons/Card/index";
import Card from "./Card/Card";
import { useChatbar } from "../../hook/useChatBar";

export const Chatbar = () => {
  const { t, chat, active, setTabActive, sortedMessages, handleClick } =
    useChatbar();

  const tabNames = Object.keys(active);

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
        <p className="empty">{t("noMessages")}</p>
      </>
    );
  };

  return (
    <div className="chatbarContainer">
      <div className="chatTabs">
        {tabNames.map((tabName) => (
          <button
            key={tabName}
            className={`${tabName.toLowerCase()} ${
              active[tabName] ? "activetab" : "tab"
            }`}
            onClick={() => setTabActive(tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>

      <div className="messageBox">
        {active["Messages"]
          ? renderCards(sortedMessages)
          : renderCards(Object.entries(chat.stats))}
      </div>
    </div>
  );
};
