import { useState } from "react";
import { useUser } from "../../../context/UserInfo";
import "./PaymentIssues.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

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

  const totalErrors = Object.values(user.errors).reduce(
    (acc, val) => acc + val,
    0
  );

  const issueData = Object.entries(issue).map(([name, obj]) => ({
    name,
    symbol: obj.symbol,
    errorCount: obj.errorCount,
    fill: obj.color,
  }));

  return (
    <div className="paymentIssueContainer">
      <div className="issuetitle">Payment Issues</div>
      <div className="issueChart">
        <ResponsiveContainer
          width="100%"
          height={150}
        >
          <BarChart
            data={issueData}
            margin={{ top: 11, right: 0, left: -60, bottom: 0 }}
          >
            <XAxis
              dataKey="symbol"
              axisLine={false}
              tickLine={false}
              className="xaxis"
              tick={{
                fill: "rgba(189, 189, 189, 1)",
              }}
            />
            <YAxis axisLine={false} tick={false} />
            <Tooltip />
            <Bar dataKey="errorCount" radius={[15, 15, 0, 0]}>
              <LabelList
                dataKey="errorCount"
                position="top"
                className="lable"
                style={{
                  fill: "rgba(130, 130, 130, 1)",
                  fontSize: "0.8rem",
                }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="totalErrors">
        <div className="err">Total number of errors:&nbsp;&nbsp;</div>
        <div className="errorCount">{totalErrors}</div>
      </div>

      <div className="errorInfoContainer">
        {Object.entries(issue).map(([key, error], index) => (
          <div key={index} className="error">
            <div className="symbol" style={{ backgroundColor: error.color }}>
              {error.symbol}
            </div>
            <div className="errorTitle">{key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
