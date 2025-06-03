import { useEffect, useState, useMemo } from "react";
import "./Chatbar.css";
import * as Icons from "../../assets/icons/Card/index";
import Card from "./Card/Card";
import { DashboardApi, updateMessageData } from "../../api/DashboardApi";
import moment from "moment";

export const Chatbar = () => {
  const [chat, setChat] = useState({
    messages: {},
    stats: {},
  });

  const [active, setActive] = useState({
    statsStatus: false,
    messageStatus: true,
  });

  const setTabActive = (tab) => {
    setActive({
      statsStatus: tab === "statsStatus",
      messageStatus: tab === "messageStatus",
    });
  };

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await DashboardApi("messages");
      if (data?.data) {
        setChat((prev) => ({ ...prev, messages: data.data }));
      }
    };
    fetchMessages();
  }, []);

  const todaysChat = useMemo(() => {
    return Object.entries(chat.messages).filter((data) => {
      return moment().diff(moment(data[1]?.timeStamp), "hours") < 24;
    });
  }, [chat.messages]);

  const sortedMessages = useMemo(() => {
    return [...todaysChat].sort(
      (a, b) => new Date(b[1]?.timeStamp) - new Date(a[1]?.timeStamp)
    );
  }, [todaysChat]);

  const handleClick = (index) => {
    if (!chat.messages[index].isOpen) {
      setChat((prev) => ({
        ...prev,
        messages: {
          ...prev.messages,
          [index]: {
            ...prev.messages[index],
            isOpen: true,
          },
        },
      }));
      updateMessageData("upadateMessData", index);
    }
  };

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
          : renderCards(chat.stats)}
      </div>
    </div>
  );
};
