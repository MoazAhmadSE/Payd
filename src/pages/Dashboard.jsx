import "../css/Dashboard.css";

import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import { useUser } from "../context/UserInfo";
import { ChatBarMotion } from "../components/ChatBarMotion";
import Loading from "../components/Loading";
import { Suspense, useState } from "react";
import { useChatbar } from "../hook/useChatBar";
import { Chatbar } from "../components/Chatbar/Chatbar";

const Dashboard = () => {
  const [showChatbar, setShowChatbar] = useState(false);
  const chatbar = useChatbar();

  const { user, loading } = useUser();
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="topbar-homepage-container">
          <Topbar
            userData={user}
            setShowChatbar={setShowChatbar}
            showChatbar={showChatbar}
            hasUnreadMessages={chatbar.hasUnreadMessages}
          />
          <div
            className={`homepage-chatbar-container ${
              !showChatbar ? "hideChatBar" : ""
            }`}
          >
            <div className="homepage-container">
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </div>
            <ChatBarMotion chatbarData={chatbar} showChatbar={showChatbar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
