import './App.css'
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <h1>Todo List Zustand</h1>

      <AddTask />

      <TaskList />
    </div>
  );
}

export default App;