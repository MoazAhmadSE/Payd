import { Chatbar } from "../components/Chatbar/Chatbar";
import { Navbar } from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import "../css/Dashboard.css";
import * as Icon from "../assets/icons/Dashboard/index";
import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "../context/UserInfo";
import Loading from "../components/Loading";

const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNotification, setIsNotification] = useState(true);
  const { user, loading } = useUser();
  if (loading) {
    return <Loading />;
  }
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
            <Topbar userData={user} />
          </div>
          <div className="lower">
            <div className="main">
              <Outlet />
            </div>
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
          </div>
        </div>
      </div>
      <div className="chatButton">
        <div className="chatIcon" onClick={showChat}>
          <Icon.Message />
        </div>
        <div className={`${isNotification ? "chatNotification" : ""}`}></div>
      </div>
    </>
  );
};

export default Dashboard;