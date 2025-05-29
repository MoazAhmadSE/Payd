import "./Earning.css";

export default function Earning({ totalEarning }) {
  return (
    <h2 className="earnings">
      You earned NGN {totalEarning?.toLocaleString("en-US")} this month.
    </h2>
  );
}
