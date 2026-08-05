import { useState } from "react";
import "./App.css";
import { TeamList } from "./TeamList";
import TaskFilter from "./TaskFilter";
import { LogEveryRender } from "./LogEveryRender";
import JsonPlaceholder from './JsonPlaceholder';

function App() {
  const [count, setCount] = useState(0);
  const [lastAction, setLastAction] = useState("Nessuna");
  const [tasks, setTasks] = useState([
    { id: 1, title: "Studiare React", completed: false },
    { id: 2, title: "Fare la spesa", completed: true },
    { id: 3, title: "Rispondere alle email", completed: false }
  ]);
  const [showOnlyPending, setShowOnlyPending] = useState(false);

  const handleAction = (type, value) => {
    setLastAction(`${type} con valore ${value}`);
  };

  // Funzione per fare +1
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Funzione per dividere per 2 e arrotondare per difetto
  const handleDivide = () => {
    setCount((prevCount) => Math.floor(prevCount / 2));
  };

  // Variabile logica che controlla se il numero è un multiplo di 5.
  const isMultiploDi5 = count > 0 && count % 5 === 0;

  const aggiungiTask = () => {
    const nuovoTask = {
      id: Date.now(),
      title: "Nuova attività " + Math.floor(Math.random() * 100),
      completed: false
    };
    setTasks([...tasks, nuovoTask]);
  };

  const cambiaStatoTask = (idTaskCliccato) => {
    const taskAggiornati = tasks.map((task) => {
      if (task.id === idTaskCliccato) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(taskAggiornati);
  };

  const cambiaFiltro = () => {
    setShowOnlyPending(!showOnlyPending);
  };

  return (
    <>
      <div className="event-box">
        <p>Ultimo click: {lastAction}</p>
        <button onClick={() => handleAction("Azione A", 100)}>Azione 1</button>
        <button onClick={() => handleAction("Azione B", 200)}>Azione 2</button>
      </div>

      <LogEveryRender></LogEveryRender>
      <br></br>

      <TeamList />

      <br></br>
      <JsonPlaceholder></JsonPlaceholder>

      <section id="center" style={{ marginTop: "30px" }}>
        <button type="button" className="counter" onClick={handleIncrement}>
          +1 (Valore: {count})
        </button>
        <button type="button" className="counter" onClick={handleDivide}>
          Diviso 2
        </button>
      </section>

      {isMultiploDi5 && (
        <div style={{ marginTop: "20px", fontWeight: "bold", color: "green" }}>
          È un multiplo di 5
        </div>
      )}

      <section style={{ marginTop: "40px", borderTop: "2px solid #eee", paddingTop: "20px" }}>
        <div style={{ marginBottom: "20px" }}>
          <button onClick={aggiungiTask} style={{ marginRight: "10px" }}>
            + Aggiungi Task
          </button>
          <button onClick={cambiaFiltro}>
            Filtro: {showOnlyPending ? "Mostra Tutti" : "Mostra Solo Da Fare"}
          </button>
        </div>
        
        <TaskFilter 
          tasks={tasks} 
          showOnlyPending={showOnlyPending} 
          onToggleTask={cambiaStatoTask} 
        />
      </section>
    </>
  );
}

export default App;