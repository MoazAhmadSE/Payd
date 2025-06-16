import "./PieChart.css";
import { PieChart, Pie, Cell } from "recharts";

export default function Piechart({ sucessRate }) {
  return (
    <div className="sucessAnimation">
      <PieChart width={180} height={180}>
        <Pie
          data={[{ value: 100 }]}
          dataKey="value"
          startAngle={90}
          endAngle={-270}
          innerRadius={55.27}
          outerRadius={80}
          fill="rgba(223, 238, 219, 1)"
          stroke="none"
        />

        <Pie
          data={[{ value: sucessRate }]}
          dataKey="value"
          startAngle={90}
          endAngle={90 - 360 * (sucessRate / 100)}
          innerRadius={55.27}
          outerRadius={80}
          cornerRadius={20}
          stroke="none"
        >
          <Cell fill="rgba(166, 217, 151, 1)" />
        </Pie>
      </PieChart>
      <div className="sucessRate">{sucessRate ? (Math.round(sucessRate)) : 0 }%</div>
    </div>
  );
}
