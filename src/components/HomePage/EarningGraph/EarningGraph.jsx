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
import Timeline from "./TimeLine/Timeline";
import "./EarningGraph.css";

export default function EarningGraph({ earningsData }) {
  const [selectedRange, setSelectedRange] = useState("This Week");

  const sortedEarnings = earningsData?.[selectedRange]?.data;

  const formatMap = {
    Today: "h a",
    "This Week": "EEE",
    "Last 2 Weeks": "d MMM",
    "This Month": "MMM d",
    "This Year": "MMM",
    Lifetime: "yyyy",
  };
  const pattern = formatMap[selectedRange] || "Pp";

  const chartData = (sortedEarnings || [])?.map((entry) => ({
    name: format(parseISO(entry.timestamp), pattern),
    NGN: entry.NGN,
  }));

  return (
    <>
      <Timeline
        selectedRange={selectedRange}
        setSelectedRange={setSelectedRange}
      />

      <div className="GraphContiner">
        {chartData.length == 0 ? (
          <div className="timelineError">No Data Found between this Timeline...</div>
        ) : (
          <>
            <ResponsiveContainer>
              <BarChart
                data={chartData}
                margin={{ top: 15, right: 20, left: 1, bottom: 1 }}
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
          </>
        )}
      </div>
    </>
  );
}
