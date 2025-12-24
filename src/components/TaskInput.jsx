import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTasks } from "../store/useTasks";

export default function TaskInput() {
  const { addTask, updateTask, editTask, setEditTask } = useTasks();
  const [text, setText] = useState("");

  // Safe effect to sync editTask to input
  useEffect(() => {
    if (editTask) {
      // wrap in setTimeout 0 to defer execution
      setTimeout(() => setText(editTask.text), 0);
    } else {
      // defer clearing to avoid calling setState synchronously inside the effect
      setTimeout(() => setText(""), 0);
    }
  }, [editTask]);

  const handleAddOrUpdate = () => {
    if (!text.trim()) {
      toast.error("Task cannot be empty");
      return;
    }

    if (editTask) {
      updateTask(editTask.id, text.trim());
      toast.success("Task updated");
      setEditTask(null);
    } else {
      addTask(text.trim());
      toast.success("Task added");
    }

    setText("");
  };

  return (
    <div className="flex gap-2 mb-6">
      <Input
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddOrUpdate()}
      />
      <Button onClick={handleAddOrUpdate}>
        {editTask ? "Update" : "Add"}
      </Button>
    </div>
  );
}
