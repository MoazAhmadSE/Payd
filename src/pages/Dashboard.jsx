import { Navbar } from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import "../css/Dashboard.css";
import AppRouters from "../routes/AppRoutes";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <div className="upper">
          <Topbar />
        </div>
        <div className="lower">
          <div className="PageSection">
            <Outlet/>
          </div>
          <div className="Chatbar">
            <div className="chatbarContainer">
              <div className="chatTabs">
                <div className="stats">Stats</div>
                <div className="messages">Massages</div>
              </div>
              <div className="messageBox"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
