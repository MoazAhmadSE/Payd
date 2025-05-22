import { Navbar } from "../components/Navbar/Navbar";
import { Topbar } from "../components/Topbar/Topbar";
import "../css/Dashboard.css";
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
        <div className="lower"></div>
      </div>
    </div>
  );
};
