import { useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

function AddTask() {
  const addTask = useTodoStore((state) => state.addTask);

  const [text, setText] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTask(text, priority);

    setText("");
    setPriority("Medium");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nuovo task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button type="submit">Aggiungi</button>
    </form>
  );
}

export default AddTask;
