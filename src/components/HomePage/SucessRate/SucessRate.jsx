import "./SucessRate.css";
import Piechart from "./Piechart/Piechart";
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export default function SucessRate({ sucessRatio }) {
  const { t } = useTranslation();
  const sucess = useMemo(() => t("sucess", { returnObjects: true }), [t]);
  console.log("sadddddddddddddddd", sucess);
  console.log("sadddddddddddddddd", sucess.successRate);
  const sucessRate =
    (sucessRatio?.sucessfull * 100) /
    (sucessRatio?.sucessfull + sucessRatio?.unsucessfull);
  return (
    <div className="sucessRateContainer">
      <div className="title">{sucess?.successRate}</div>
      <Piechart sucessRate={sucessRate} />
      <div className="sucessCountConatainer">
        <div className="unsucessfullSucessCatagory">
          <div className="countContainer">
            <div className="unsucessfullIcon"></div>
            <div className="count">{sucessRatio?.unsucessfull}</div>
          </div>
          <div className="text">{sucess?.unsuccessful}</div>
        </div>
        <div className="sucessfullSucessCatagory">
          <div className="countContainer">
            <div className="sucessfullIcon"></div>
            <div className="count">{sucessRatio?.sucessfull}</div>
          </div>
          <div className="text">{sucess?.successful}</div>
        </div>
      </div>
    </div>
  );
}
