import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const containerStyle = {
    backgroundColor: darkMode ? "#222" : "#f4f4f4",
    color: darkMode ? "white" : "black",
    height: "100vh",
    padding: "30px",
    transition: "0.3s ease"
  };

  const buttonStyle = {
    padding: "10px 20px",
    cursor: "pointer",
    backgroundColor: darkMode ? "white" : "black",
    color: darkMode ? "black" : "white",
    border: "none",
    marginTop: "20px"
  };

  return (
    <div style={containerStyle}>
      <h2>Dynamic Theme Toggle</h2>
      <p>This is an example of inline styling in React.</p>

      <button
        style={buttonStyle}
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeToggle;
