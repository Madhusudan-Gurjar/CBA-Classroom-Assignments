import { useState } from "react";

function Lab5MultiStepForm() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <>
        <h3>Summary</h3>
        <p>{name}</p>
        <p>{email}</p>
        <p>{experience}</p>
      </>
    );
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      {step === 1 && (
        <>
          <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <br />
          <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <button type="button" onClick={() => name && email && setStep(2)}>
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <select onChange={(e) => setExperience(e.target.value)}>
            <option>Fresher</option>
            <option>1–3 Years</option>
            <option>3+ Years</option>
          </select>
          <br />
          <button>Submit</button>
        </>
      )}
    </form>
  );
}

export default Lab5MultiStepForm;
