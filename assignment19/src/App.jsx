import { useState } from "react";
import Lab1Registration from "./components/Lab1Registration";
import Lab2Login from "./components/Lab2Login";
import Lab3Feedback from "./components/Lab3Feedback";
import Lab4ShowHidePassword from "./components/Lab4ShowHidePassword";
import Lab5MultiStepForm from "./components/Lab5MultiStepForm";

function App() {
  const [lab, setLab] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Lab Exercises for assignment 19</h2>

      <button onClick={() => setLab(1)}>Lab 1</button><br /><br />
      <button onClick={() => setLab(2)}>Lab 2</button><br /><br />
      <button onClick={() => setLab(3)}>Lab 3</button><br /><br />
      <button onClick={() => setLab(4)}>Lab 4</button><br /><br />
      <button onClick={() => setLab(5)}>Lab 5</button><br />

      <hr />

      {lab === 1 && <Lab1Registration />}
      {lab === 2 && <Lab2Login />}
      {lab === 3 && <Lab3Feedback />}
      {lab === 4 && <Lab4ShowHidePassword />}
      {lab === 5 && <Lab5MultiStepForm />}
    </div>
  );
}

export default App;
