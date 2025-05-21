import { Navbar } from "../components/Navbar/Navbar";
import "../css/Dashboard.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sideBar">
        <Navbar />
      </div>
      <div className="right">
        <div className="upper">
          <div className="topBar">
            <div className="search">
              
              <input placeholder="Search" />
            </div>
            <div className="button">sdv</div>
            <div className="language">sdv</div>
            <div className="bellIcon">svd</div>
            <div className="user">sdvv</div>
          </div>
        </div>
        <div className="lower"></div>
      </div>
    </div>
  );
};
