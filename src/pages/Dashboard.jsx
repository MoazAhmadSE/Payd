import "../css/Dashboard.css";

import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import { useUser } from "../context/UserInfo";
import { ChatBarMotion } from "../components/ChatBarMotion";
import Loading from "../components/Loading";
import { Suspense, useState } from "react";

const Dashboard = () => {

  const [ showChatbar, setShowChatbar ] = useState(false);

  const { user, loading } = useUser();
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="dashboard">
        <div className="left">
          <Navbar />
        </div>
        <div className="right">
          <div className="upper">
            <Topbar userData={user} setShowChatbar={setShowChatbar} showChatbar={showChatbar} />
          </div>
          <div className={`lower ${!showChatbar ? "hideChatBar" : ""}`}>
            <div className="main">
              <Suspense fallback={<Loading />}>
                <Outlet />
              </Suspense>
            </div>
            <ChatBarMotion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
