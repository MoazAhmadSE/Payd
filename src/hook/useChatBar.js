import { useEffect, useState, useMemo } from "react";
import { DashboardApi, updateMessageData } from "../api/DashboardApi";
import moment from "moment";

export const useChatbar = () => {
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

  const todaysChat = useMemo(() => {
    return Object.entries(chat.messages).filter(([, message]) => {
      return moment().diff(moment(message?.timeStamp), "hours") < 24;
    });
  }, [chat.messages]);

  const sortedMessages = useMemo(() => {
    return [...todaysChat].sort(
      (a, b) => new Date(b[1]?.timeStamp).getTime() - new Date(a[1]?.timeStamp).getTime()
    );
  }, [todaysChat]);

  const handleClick = (index) => {
    if (!chat.messages[index]?.isOpen) {
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

  useEffect(() => {
    const fetchMessages = async () => {
      const data = await DashboardApi("messages");
      if (data?.data) {
        setChat((prev) => ({ ...prev, messages: data.data }));
      }
    };
    fetchMessages();
  }, []);

  return {
    chat,
    active,
    sortedMessages,
    setTabActive,
    handleClick,
  };
};
