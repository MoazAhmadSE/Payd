import { useState } from "react";
import { format, parseISO } from "date-fns";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import Timeline from "./timeline/Timeline";
import "./EarningGraph.css";
import { useTranslation } from "react-i18next";

export default function EarningGraph({ earningsData }) {
  const { t } = useTranslation();
  const [selectedRangeKey, setSelectedRangeKey] = useState("thisWeek");

  const formatMap = {
    today: "h a",
    thisWeek: "EEE",
    last2Weeks: "d MMM",
    thisMonth: "MMM d",
    thisYear: "MMM",
    lifetime: "yyyy",
  };

  const pattern = formatMap[selectedRangeKey];
  const sortedEarnings = earningsData?.[selectedRangeKey]?.data || [];

  const chartData = sortedEarnings.map((entry) => ({
    name: format(parseISO(entry.timestamp), pattern),
    NGN: entry.NGN,
  }));

  return (
    <div className="timeline-graph-container">
      <Timeline
        selectedRangeKey={selectedRangeKey}
        setSelectedRangeKey={setSelectedRangeKey}
      />

      <div className="GraphContiner">
        <div className="graph">
          {chartData.length === 0 ? (
            <div className="timelineError">{t("noDataMessage")}</div>
          ) : (
            <ResponsiveContainer>
              <BarChart
                data={chartData}
                // margin={{ top: 50, right: 30, left: 30, bottom: 20 }}
              >
                <CartesianGrid
                  strokeDasharray="10 5"
                  horizontal
                  vertical={false}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  interval="auto"
                  minTickGap={52}
                  className="xaxis"
                />
                <YAxis axisLine={false} tickLine={false} className="yaxis" />
                <Tooltip formatter={(value) => `${value.toFixed(2)}`} />
                <Bar
                  dataKey="NGN"
                  fill="rgba(236, 204, 255, 1)"
                  radius={[15, 15, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
