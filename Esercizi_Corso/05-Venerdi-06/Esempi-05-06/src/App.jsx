import "./App.css";
import { Padre } from "./components/Padre";
import { RegisterSetup } from "./components/RegisterSetup";
import JsonPlaceholderGet from "./components/JsonPlaceholderGet";

function App() {
  return (
    <>
      <div>
        <JsonPlaceholderGet />
      </div>
      <Padre />
      <RegisterSetup />
    </>
  );
}

export default App;
