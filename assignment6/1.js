function getUser(callback) {
  setTimeout(() => {
    const user = {
      id: 1,
      name: "Madhusudan"
    };
    callback(user);
  }, 2000);
}

// Call function
getUser((user) => {
  console.log("User name:", user.name);
});
