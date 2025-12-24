import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTasks = create(
  persist(
    (set) => ({
      tasks: [],
      darkMode: false,
      editTask: null, // track the task being edited

      // Add new task
      addTask: (text) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            {
              id: crypto.randomUUID(),
              text,
              completed: false,
            },
          ],
        })),

      // Toggle completion
      toggleTask: (id) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
          ),
        })),

      // Delete task
      deleteTask: (id) =>
        set((state) => ({
          tasks: state.tasks.filter((t) => t.id !== id),
          // If the deleted task is currently being edited, reset editTask
          editTask: state.editTask?.id === id ? null : state.editTask,
        })),

      // Set dark mode
      setDarkMode: (value) => {
        set({ darkMode: value });
        document.documentElement.classList.toggle("dark", value);
      },

      // Set a task for editing
      setEditTask: (task) => set({ editTask: task }),

      // Update a task text
      updateTask: (id, newText) =>
        set((state) => ({
          tasks: state.tasks.map((t) =>
            t.id === id ? { ...t, text: newText } : t
          ),
          editTask: null, // reset editTask after update
        })),
    }),
    {
      name: "task-tracker-storage",
      onRehydrateStorage: () => (state) => {
        if (state?.darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      },
    }
  )
);
