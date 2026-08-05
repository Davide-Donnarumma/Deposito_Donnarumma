import GetPosts from "./components/GetPosts";
import CreatePost from "./components/CreatePost";
import DeletePost from "./components/DeletePost";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <h1 className="titolo-sezione">Esercitazione API REST</h1>
      
      <div className="api-grid">
        <GetPosts />
        <CreatePost />
        <DeletePost />
      </div>
    </div>
  );
}