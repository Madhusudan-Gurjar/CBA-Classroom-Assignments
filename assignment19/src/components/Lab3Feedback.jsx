import { useState } from "react";

function Lab3Feedback() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  return !done ? (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
      <textarea onChange={(e) => setText(e.target.value)} />
      <p>Characters: {text.length}</p>
      {text.length > 100 && <p style={{ color: "red" }}>Limit exceeded</p>}
      <button disabled={text.length > 100}>Submit</button>
    </form>
  ) : (
    <h3>Thank you for your feedback</h3>
  );
}

export default Lab3Feedback;
