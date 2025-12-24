import { useTasks } from "../store/useTasks";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useTasks((s) => s.tasks);

  if (!tasks.length) {
    return (
      <p className="text-center text-muted-foreground">
        No tasks yet. Add one!
      </p>
    );
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
