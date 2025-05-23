import { Chatbar } from "../components/Main/Chatbar/Chatbar";
import { MainComp } from "../components/Main/PageSection/MainComp";
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
          <MainComp/>
          <Chatbar/>
        </div>
      </div>
    </div>
  );
};
