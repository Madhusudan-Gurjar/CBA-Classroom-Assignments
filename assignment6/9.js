fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "Hello",
    body: "Async JS",
    userId: 1
  })
})
  .then((res) => res.json())
  .then((data) => console.log("Response:", data))
  .catch((err) => console.log("Error:", err));
