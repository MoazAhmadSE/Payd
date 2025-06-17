import "../css/Dashboard.css";
import { Chatbar } from "../components/Chatbar/Chatbar";
import { motion, AnimatePresence } from "framer-motion";

export const ChatBarMotion = ({ chatbarData, showChatbar }) => {
  return (
    <>
      <div className="chat">
        <Chatbar chatbarData={chatbarData} />
      </div>
      <AnimatePresence className="slider">
        {showChatbar && (
          <motion.div
            className="chat showChat"
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
