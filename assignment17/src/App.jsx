
import Welcome from "./Components/Welcome";
import Student from "./Components/Student";
import Counter from "./Components/Counter.jsx";
import ToggleMessage from "./Components/ToggleMessage.jsx";
import Timer from "./Components/Timer.jsx";
function App() {
  return (
    <div>
      <Welcome /><hr />
      <Student name="Rahul" course="React" /><hr />
      <Counter /><hr />
      <ToggleMessage /><hr />
      <Timer /><hr />
    </div>
  );
}

export default App;
