import { create } from "zustand";

export const useTodoStore = create((set) => ({
  tasks: [],

  addTask: (text, priority) =>
    set((state) => ({
      tasks: [
        ...state.tasks,
        {
          id: crypto.randomUUID(),
          text,
          isCompleted: false,
          priority,
        },
      ],
    })),

  deleteTask: (id) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    })),

  toggleCompletion: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    })),

  updatePriority: (id, newPriority) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, priority: newPriority } : task,
      ),
    })),
}));
