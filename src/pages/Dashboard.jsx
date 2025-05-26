import { Chatbar } from "../components/Main/Chatbar/Chatbar";
import { MainComp } from "../components/Main/PageSection/MainComp";
import { Navbar } from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import "../css/Dashboard.css";
import * as Icon from "../assets/icons/Dashboard/index";
import AppRouters from "../routes/AppRoutes";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNotification, setIsNotification] = useState(true);
  const showChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <>
      <div className="dashboard">
        <div className="left">
          <Navbar />
        </div>
        <div className="right">
          <div className="upper">
            <Topbar />
          </div>
          <div className="lower">
            <div className="main">
              <MainComp/>
            </div>
            <div className="chat">
              <Chatbar />
            </div>
            <AnimatePresence>
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
          </div>
        </div>
      </div>
      <div className="chatButton">
        <div className="chatIcon" onClick={() => showChat()}>
          <Icon.Message />
        </div>
        <div className={`${isNotification ? "chatNotification" : ""}`}></div>
      </div>
    </>
  );
};
