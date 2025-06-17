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
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

export default function PaymentIssues({ paymentErrors }) {
  const { t } = useTranslation();
  const PaymentIssues = useMemo(
    () => t("issues", { returnObjects: true }),
    [t]
  );
  const { issueData, totalErrors, issue } = usePaymentIssues(paymentErrors);

  return (
    <div className="paymentIssueContainer">
      <div className="issuetitle">{PaymentIssues?.paymentIssues}</div>

      <div className="issueChart">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={issueData}
            margin={{ top: 6, right: 0, left: -60, bottom: 0 }}
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
            <Bar dataKey="errorCount" radius={[8, 8, 0, 0]}>
              <LabelList
                dataKey="errorCount"
                position="top"
                className="lable"
                fill="rgba(130, 130, 130, 1)"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="totalErrors">
        <div className="err">{PaymentIssues?.totalErrors}&nbsp;&nbsp;</div>
        <div className="errorCount">{totalErrors}</div>
      </div>

      <div className="errorInfoContainer">
        {Object.entries(issue).map(([key, error], index) => {
          const label = PaymentIssues?.errors?.[key] || key; // fallback to key if label not found
          return (
            <div key={index} className="error">
              <div className="symbol" style={{ backgroundColor: error.color }}>
                {error.symbol}
              </div>
              <div className="errorTitle">{label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
