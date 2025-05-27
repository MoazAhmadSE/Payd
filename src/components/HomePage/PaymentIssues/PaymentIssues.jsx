import { useState } from "react";
import { useUser } from "../../../context/UserInfo";
import "./PaymentIssues.css";
import { object } from "framer-motion/client";

export default function PaymentIssues() {
  const { user } = useUser();
  const [issue, setIssue] = useState({
    "Customer errors": {
      color: "rgba(255, 187, 79, 1)",
      symbol: "a",
      errorCount: user.errors["Customer errors"],
    },
    "Fraud blocks": {
      color: "rgba(255, 218, 147, 1)",
      symbol: "x",
      errorCount: user.errors["Fraud blocks"],
    },
    "Bank errors": {
      color: "rgba(255, 117, 118, 1)",
      symbol: "o",
      errorCount: user.errors["Bank errors"],
    },
    "System errors": {
      color: "rgba(128, 224, 229, 1)",
      symbol: "n",
      errorCount: user.errors["System errors"],
    },
  });
  return (
    <div className="sucessRateContainer">
      <div className="title">Payment Issues</div>
      <div className="chart"></div>
      <div className="totalErrors">
        <div className="err">Total number of errors:&nbsp;&nbsp;</div>
        <div className="errorCount">
          {Object.values(user.errors).reduce((acc, val) => acc + val, 0)}
        </div>
      </div>
      <div className="errorInfoContainer">
        {Object.entries(issue).map(([key, error], index) => (
          <div key={index} className="error">
            <div
              className="symbol"
              style={{ backgroundColor: `${error.color}` }}
            >
              {error.symbol}
            </div>
            <div className="errorTitle">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
