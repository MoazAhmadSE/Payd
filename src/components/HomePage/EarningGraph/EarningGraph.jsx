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
import { getEarningsData } from "./EarningData";
import "./EarningGraph.css";

export default function EarningGraph() {
  const [selectedRange, setSelectedRange] = useState("This Week");

  const earnings = getEarningsData(selectedRange);

  // Sort by date ascending
  const sortedEarnings = [...earnings].sort(
    (a, b) => new Date(a.timestamp) - new Date(b.timestamp)
  );

  // Label format depending on selected range
  const formatMap = {
    Today: "h a",
    "This Week": "EEE",
    "Last 2 Weeks": "d MMM",
    "This Month": "MMM d",
    "This Year": "MMM",
    Lifetime: "yyyy",
  };
  const pattern = formatMap[selectedRange] || "Pp";

  // Prepare data for BarChart
  const chartData = sortedEarnings.map((entry) => ({
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
        <ResponsiveContainer>
          <BarChart
            data={chartData}
          >
            <CartesianGrid
              strokeDasharray="10 5"
              horizontal={true}
              vertical={false}
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              interval="auto"
              minTickGap={52}
              className="xaxis"
              />
            <YAxis
              axisLine={false}
              className="yaxis"
            />
            <Tooltip formatter={(value) => `${value.toFixed(2)}`} />
            <Bar
              dataKey="NGN"
              fill="rgba(236, 204, 255, 1)"
              radius={[15, 15, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
