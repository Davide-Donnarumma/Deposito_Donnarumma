import { useTodoStore } from "../store/useTodoStore";

function TaskItem({ task }) {
  const deleteTask = useTodoStore((state) => state.deleteTask);
  const toggleCompletion = useTodoStore((state) => state.toggleCompletion);
  const updatePriority = useTodoStore((state) => state.updatePriority);

  return (
    <li>
      <input
        type="checkbox"
        checked={task.isCompleted}
        onChange={() => toggleCompletion(task.id)}
      />

      <span
        style={{
          textDecoration: task.isCompleted ? "line-through" : "none",
          marginRight: "10px",
        }}
      >
        {task.text}
      </span>

      <select
        value={task.priority}
        onChange={(e) => updatePriority(task.id, e.target.value)}
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button onClick={() => deleteTask(task.id)}>Elimina</button>
    </li>
  );
}

export default TaskItem;
