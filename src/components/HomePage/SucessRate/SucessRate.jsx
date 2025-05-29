import "./SucessRate.css";
import Piechart from "./Piechart/Piechart";

export default function SucessRate({ sucessRatio }) {
  const sucessRate =
    (sucessRatio?.sucessfull * 100) / (sucessRatio?.sucessfull + sucessRatio?.unsucessfull);
  return (
    <div className="sucessRateContainer">
      <div className="title">Sucess rate</div>
      <Piechart sucessRate={sucessRate} />
      <div className="sucessCountConatainer">
        <div className="unsucessfullSucessCatagory">
          <div className="countContainer">
            <div className="unsucessfullIcon"></div>
            <div className="count">{sucessRatio?.unsucessfull}</div>
          </div>
          <div className="text">Unsucessfull</div>
        </div>
        <div className="sucessfullSucessCatagory">
          <div className="countContainer">
            <div className="sucessfullIcon"></div>
            <div className="count">{sucessRatio?.sucessfull}</div>
          </div>
          <div className="text">Sucessfull</div>
        </div>
      </div>
    </div>
  );
}
