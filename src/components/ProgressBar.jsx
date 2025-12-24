import { useTasks } from "../store/useTasks";

export default function ProgressBar() {
  const { tasks } = useTasks();
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const percent = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="border rounded-2xl p-4">
      <div className="flex justify-between text-sm mb-2">
        <span>Progress</span>
        <span>{percent}%</span>
      </div>

      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-pink-500 transition-all duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
