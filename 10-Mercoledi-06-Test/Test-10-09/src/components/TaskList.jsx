import { useTodoStore } from "../store/useTodoStore";
import TaskItem from "./TaskItem";

function TaskList() {
  const tasks = useTodoStore((state) => state.tasks);

  if (tasks.length === 0) {
    return <p>Nessun task presente.</p>;
  }

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;
