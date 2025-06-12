import { useTranslation } from "react-i18next";
import "./Earning.css";

export default function Earning({ totalEarning }) {
  const { t }= useTranslation();
  let displayValue = "0";
  if (typeof totalEarning === "number") {
    displayValue = totalEarning.toLocaleString("en-US");
  } else {
    displayValue = Number(totalEarning).toLocaleString("en-US");
  }
  return (
    <h2 className="earnings">{t("totalEarning", { total: displayValue })}</h2>
  );
}
