function loginUser(username) {
  return new Promise((resolve, reject) => {
    if (username === "admin") {
      resolve(" Login Successful");
    } else {
      reject(" Invalid Username");
    }
  });
}

// Using then/catch
loginUser("admin")
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

