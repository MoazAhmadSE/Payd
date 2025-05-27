import "./PieChart.css";
import { PieChart, Pie, Cell } from "recharts";

export default function Piechart({ sucessRate }) {
  return (
    <div className="sucessAnimation">
      <PieChart width={200} height={200}>
        <Pie
          data={[{ value: 100 }]}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          innerRadius={70}
          outerRadius={100}
          fill="rgba(223, 238, 219, 1)"
          stroke="none"
        />

        <Pie
          data={[{ value: sucessRate }]}
          dataKey="value"
          startAngle={90}
          endAngle={90 - 360 * (sucessRate / 100)}
          innerRadius={70}
          outerRadius={100}
          cornerRadius={50}
          stroke="none"
        >
          <Cell fill="rgba(166, 217, 151, 1)" />
        </Pie>
      </PieChart>
      <div className="sucessRate">{Math.round(sucessRate)}%</div>
    </div>
  );
}
