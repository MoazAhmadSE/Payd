import { useEffect, useState, useMemo } from "react";
import { DashboardApi, updateMessageData } from "../api/DashboardApi";
import moment from "moment";
import { useTranslation } from "react-i18next";

export const useChatbar = () => {
  const [chat, setChat] = useState({
    messages: {},
    stats: {},
  });

  const { t } = useTranslation();
  const chatBoxHeadings = useMemo(() => t("chatBox", { returnObjects: true }), [t]);
  const [headings, setHeadings] = useState([]);
  const [active, setActive] = useState({});

  const setTabActive = (tab) => {
    const updated = {};
    headings.forEach(([key]) => {
      updated[key] = key === tab;
    });
    setActive(updated);
  };

  const todaysChat = useMemo(() => {
    return Object.entries(chat.messages).filter(([, message]) => {
      return moment().diff(moment(message?.timeStamp), "hours") < 24;
    });
  }, [chat.messages]);

  const sortedMessages = useMemo(() => {
    return [...todaysChat].sort(
      (a, b) =>
        new Date(b[1]?.timeStamp).getTime() - new Date(a[1]?.timeStamp).getTime()
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

  const fetchMessages = async () => {
    const data = await DashboardApi("messages");
    console.log("THis is t: ", t);
    console.log("THis is Dta: ", data);
    if (data?.data) {
      setChat((prev) => ({ ...prev, messages: data.data }));
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [t]);

  useEffect(() => {
    const entries = Object.entries(chatBoxHeadings);
    setHeadings(entries);

    const initialActive = {};
    entries.forEach(([key], index) => {
      initialActive[key] = index === 1;
    });
    setActive(initialActive);
  }, [chatBoxHeadings]);


  return {
    t,
    chat,
    active,
    headings,
    sortedMessages,
    setTabActive,
    handleClick,
  };
};
