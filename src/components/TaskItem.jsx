import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Trash, Edit } from "lucide-react";
import { useTasks } from "../store/useTasks";

export default function TaskItem({ task }) {
  const { toggleTask, deleteTask, setEditTask } = useTasks();

  return (
    <div className="flex items-center justify-between p-3 rounded-xl border transition-all hover:scale-[1.01] hover:shadow-md">
      <div className="flex items-center gap-3">
        <Checkbox
          checked={task.completed}
          onCheckedChange={() => toggleTask(task.id)}
        />
        <span
          className={`transition-colors ${
            task.completed
              ? "line-through text-zinc-400 dark:text-zinc-500"
              : "text-zinc-900 dark:text-zinc-100"
          }`}
        >
          {task.text}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={() => setEditTask(task)}>
          <Edit size={16} />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => deleteTask(task.id)}>
          <Trash size={16} />
        </Button>
      </div>
    </div>
  );
}
