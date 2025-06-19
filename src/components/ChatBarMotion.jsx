import "../css/Dashboard.css";
import { Chatbar } from "../components/Chatbar/Chatbar";
import { motion, AnimatePresence } from "framer-motion";

export const ChatBarMotion = ({ chatbarData, showChatbar }) => {
  return (
    <>
      <AnimatePresence className="chat-from-side-container">
        {showChatbar && (
          <motion.div
            className="chat-from-side"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
          >
            <Chatbar chatbarData={chatbarData} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence className="chat-from-buttom-container">
        {showChatbar && (
          <motion.div
            className="chat-from-buttom"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 70, damping: 15 }}
          >
            <Chatbar chatbarData={chatbarData} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
