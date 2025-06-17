import React from "react";
import "./Chatbar.css";
import * as Icons from "../../assets/icons/Card/index";
import Card from "./Card/Card";
import { useChatbar } from "../../hook/useChatBar";

export const Chatbar = () => {
  const {
    t,
    chat,
    active,
    headings,
    setTabActive,
    sortedMessages,
    handleClick,
  } = useChatbar();

  // const tabNames = Object.keys(active);
  // console.log("Dzsdzs: ", tabNames)

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
        {headings.map(([key, label]) => (
          <button
            key={key}
            className={`${key.toLowerCase()} ${
              active[key] ? "activetab" : "tab"
            }`}
            onClick={() => setTabActive(key)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="messageBox">
        {active["messages"]
          ? renderCards(sortedMessages)
          : renderCards(Object.entries(chat.stats))}
      </div>
    </div>
  );
};
