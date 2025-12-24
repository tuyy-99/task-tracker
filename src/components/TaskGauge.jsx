import { PieChart, Pie, Cell } from "recharts";
import { useTasks } from "../store/useTasks";

export default function TaskGauge() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  const data = [{ value: percentage }, { value: 100 - percentage }];

  const COLORS = ["#6366f1", "#e5e7eb"]; // indigo + gray

  return (
    <div className="relative flex justify-center mb-6">
      <PieChart width={260} height={160}>
        <Pie
          data={data}
          cx="50%"
          cy="100%"
          startAngle={180}
          endAngle={0}
          innerRadius={70}
          outerRadius={100}
          dataKey="value"
          stroke="none"
        >
          {data.map((_, index) => (
            <Cell
              key={index}
              fill={COLORS[index]}
              className="dark:opacity-90"
            />
          ))}
        </Pie>
      </PieChart>

      {/* Center Text */}
      <div className="absolute bottom-6 text-center">
        <p className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
          {percentage}%
        </p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Completion</p>
      </div>
    </div>
  );
}
