import "../css/Dashboard.css";

import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import { useUser } from "../context/UserInfo";
import { ChatBarMotion } from "../components/ChatBarMotion";
import Loading from "../components/Loading";

const Dashboard = () => {
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
            <Topbar userData={user} />
          </div>
          <div className="lower">
            <div className="main">
              <Outlet />
            </div>
            <ChatBarMotion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
