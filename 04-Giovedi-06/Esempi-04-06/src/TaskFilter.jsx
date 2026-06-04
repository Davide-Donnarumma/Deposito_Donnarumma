export default function TaskFilter({ tasks, showOnlyPending, onToggleTask }) {
  return (
    <div className="task-container">
      <h3>Elenco Attività</h3>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks
          .filter((task) => !showOnlyPending || !task.completed)
          .map((task) => (
            <li
              key={task.id}
              className={task.completed ? "done" : "pending"}
              // Quando l'utente clicca, attiviamo la funzione passando l'ID del task
              onClick={() => onToggleTask(task.id)}
              style={{
                padding: "10px",
                margin: "5px 0",
                cursor: "pointer",
                backgroundColor: task.completed ? "#d4edda" : "#f8d7da",
                textDecoration: task.completed ? "line-through" : "none",
                borderRadius: "5px"
              }}
            >
              {task.title}
            </li>
          ))}
      </ul>
    </div>
  );
}