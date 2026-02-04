
function AgeStatus() {
  const age = 16;

  return (
    <div>
      <h2>your decalred age is {age}</h2>
      <h2>Status: {age >= 18 ? "Adult" : "Minor"}</h2>
    </div>
  );
}

export default AgeStatus;
