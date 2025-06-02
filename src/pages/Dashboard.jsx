import { Chatbar } from "../components/Chatbar/Chatbar";
import { Navbar } from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import "../css/Dashboard.css";
import * as Icon from "../assets/icons/Dashboard/index";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loading from "../components/Loading";
import { useWebSocket } from "../context/WebSocketConnection";

const Dashboard = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNotification, setIsNotification] = useState(true);
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const socket = useWebSocket();
  const showChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  useEffect(() => {
    if (!socket) return;

    socket.addEventListener("open", () => {
      socket.send("userData");
      socket.send("messages");
    });

    const handleData = (event) => {
      const { type, payload } = JSON.parse(event.data);
      const dataType = {
        userData: () => {
          setUser(payload?.data);
        },
        messages: () => {
          setMessages(payload?.data);
        },
      };
      if (dataType[type]) {
        dataType[type]();
      } else {
        console.warn("Unknown type:", event);
      }
    };

    socket.addEventListener("message", handleData);

    return () => {
      socket.removeEventListener("message", handleData);
    };
  }, [socket]);

  // if (loading) return <Loading />;

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
              <Chatbar messages={messages} />
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
                  <Chatbar messages={messages} />
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