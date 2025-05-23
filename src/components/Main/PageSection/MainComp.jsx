import "./MainComp.css";
import { Outlet } from "react-router-dom";


export const MainComp = () => {
  return (
    <>
      <div className="PageSection">
        <Outlet />
      </div>
    </>
  );
};
