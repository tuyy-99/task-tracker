import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTasks } from "../store/useTasks";
import TaskGauge from "../components/TaskGauge";

export default function Stats() {
  const { tasks } = useTasks();

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border bg-background p-6 shadow-xl space-y-6">
        <h2 className="text-2xl font-bold text-center">Your Progress</h2>

        <TaskGauge />

        <div className="space-y-1 text-center">
          <p>
            Total: <b>{total}</b>
          </p>
          <p>
            Completed: <b>{completed}</b>
          </p>
          <p>
            Remaining: <b>{remaining}</b>
          </p>
        </div>

        <Link to="/" className="block">
          <Button variant="outline" className="w-full">
            Back to tasks
          </Button>
        </Link>
      </div>
    </main>
  );
}
