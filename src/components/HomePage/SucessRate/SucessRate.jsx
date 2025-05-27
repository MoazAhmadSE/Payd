import { useUser } from "../../../context/UserInfo";
import "./SucessRate.css";
import Piechart from "./Piechart/Piechart";

export default function SucessRate() {
  const { user } = useUser();
  const sucessRate =
    (user.sucessfull * 100) / (user.sucessfull + user.unsucessfull);
  return (
    <div className="sucessRateContainer">
      <div className="title">Sucess rate</div>
      <Piechart sucessRate={sucessRate} />
      <div className="sucessCountConatainer">
        <div className="unsucessfullSucessCatagory">
          <div className="countContainer">
            <div className="unsucessfullIcon"></div>
            <div className="count">{user.unsucessfull}</div>
          </div>
          <div className="text">Unsucessfull</div>
        </div>
        <div className="sucessfullSucessCatagory">
          <div className="countContainer">
            <div className="sucessfullIcon"></div>
            <div className="count">{user.sucessfull}</div>
          </div>
          <div className="text">Sucessfull</div>
        </div>
      </div>
    </div>
  );
}
