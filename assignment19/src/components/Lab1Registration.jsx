import { useState } from "react";

function Lab1Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required");
    } else {
      setSuccess(true);
    }
  };

  return !success ? (
    <form onSubmit={submit}>
      <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button>Register</button>
    </form>
  ) : (
    <h3>Registration Successful</h3>
  );
}

export default Lab1Registration;
