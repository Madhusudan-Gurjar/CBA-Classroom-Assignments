import { useState } from "react";

function ErrorFetch() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchData = () => {
    setLoading(true);
    setError("");

    fetch("https://invalid-url-example.com/data")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong. Please try again.");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>API Error Handling Example</h2>

      <button onClick={fetchData}>Fetch Data</button>

      {loading && <p>Loading...</p>}

      {error && (
        <div>
          <p style={{ color: "red" }}>{error}</p>
          <button onClick={fetchData}>Retry</button>
        </div>
      )}
    </div>
  );
}

export default ErrorFetch;
