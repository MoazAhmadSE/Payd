import * as Icon from "../assets/icons/Dashboard/index";
import "../css/Dashboard.css";
import { useState } from "react";
import { Chatbar } from "../components/Chatbar/Chatbar";
import { motion, AnimatePresence } from "framer-motion";

export const ChatBarMotion = () => {
  const [isNotification, setIsNotification] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const showChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <>
      <div className="chat">
        <Chatbar />
      </div>
      <AnimatePresence className="slider">
        {isChatOpen && (
          <motion.div
            className="chat showChat"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
          >
            <Chatbar />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="chatButton">
        <div className="chatIcon" onClick={showChat}>
          <Icon.Message />
        </div>
        <div className={`${isNotification ? "chatNotification" : ""}`}></div>
      </div>
    </>
  );
};
