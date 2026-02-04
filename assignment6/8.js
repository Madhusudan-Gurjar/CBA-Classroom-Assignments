fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to load data");
    }
    return res.json();
  })
  .then((users) => {
    users.forEach((user) => console.log(user.name));
  })
  .catch(() => {
    console.log("Failed to load data");
  });

  