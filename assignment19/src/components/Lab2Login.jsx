import { useState } from "react";

function Lab2Login() {
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setMessage(
      role === "Admin"
        ? "Welcome Admin! You have full access"
        : "Welcome User! Limited access granted"
    );
  };

  return !message ? (
    <form onSubmit={submit}>
      <input placeholder="Username" />
      <br />
      <input type="password" placeholder="Password" />
      <br />
      <select onChange={(e) => setRole(e.target.value)}>
        <option>User</option>
        <option>Admin</option>
      </select>
      <br />
      <button>Login</button>
    </form>
  ) : (
    <h3>{message}</h3>
  );
}

export default Lab2Login;
