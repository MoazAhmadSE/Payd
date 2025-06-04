import "./Earning.css";

export default function Earning({ totalEarning }) {
  let displayValue = "0";
  if (typeof totalEarning === "number") {
    displayValue = totalEarning.toLocaleString("en-US");
  } else {
    displayValue = Number(totalEarning).toLocaleString("en-US");
  }
  return (
    <h2 className="earnings">You earned NGN {displayValue} this month.</h2>
  );
}
