import "./App.css";
import { Welcome } from "./components/Welcome";
import { ProfileCard } from "./components/ProfileCard";
import { Avatar } from "./components/Avatar";

function App() {
  const userData = { firstName: "Anna", lastName: "Rossi", role: "Developer" };
  const userSkills = ["React", "JavaScript", "CSS"];

  return (
    <>
      <h1>Hello DSK</h1>

      <div>
        <Welcome name="Mario" messageCount={5} />
        <br></br>
        <Welcome name="Luigi" messageCount={0} />
        <br></br>
        <Avatar></Avatar>
      </div>

      <ProfileCard user={userData} skills={userSkills} />
    </>
  );
}

export default App;
