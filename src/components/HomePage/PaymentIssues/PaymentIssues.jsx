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
import { usePaymentIssues } from "../../../hook/usePaymentIssues";

export default function PaymentIssues({ paymentErrors }) {
  const { issueData, totalErrors, issue } = usePaymentIssues(paymentErrors);

  return (
    <div className="paymentIssueContainer">
      <div className="issuetitle">Payment Issues</div>

      <div className="issueChart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart
            data={issueData}
            margin={{ top: 15, right: 0, left: -60, bottom: 0 }}
          >
            <XAxis
              dataKey="symbol"
              axisLine={false}
              tickLine={false}
              className="xaxis"
              tick={{ fill: "rgba(189, 189, 189, 1)" }}
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
