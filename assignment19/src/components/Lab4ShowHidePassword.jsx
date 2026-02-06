import { useState } from "react";

function Lab4ShowHidePassword() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return !done ? (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <br />
      <input type={show ? "text" : "password"} placeholder="Password" />
      <br />
      <label>
        <input type="checkbox" onChange={() => setShow(!show)} /> Show Password
      </label>
      <br />
      <button>Submit</button>
    </form>
  ) : (
    <h3>Email entered: {email}</h3>
  );
}

export default Lab4ShowHidePassword;
