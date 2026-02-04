function loginUser(username, callback) {
  setTimeout(() => {
    callback({ username: username, status: "Logged in" });
  }, 1000);
}

function fetchUserProfile(username, callback) {
  setTimeout(() => {
    callback({ username: username, profile: "Full Stack Developer" });
  }, 1000);
}

function fetchUserOrders(username, callback) {
  setTimeout(() => {
    callback({ username: username, orders: ["Shoes", "Laptop", "Phone"] });
  }, 1000);
}

// Callback Hell
loginUser("admin", (loginRes) => {
  console.log("Step 1:", loginRes);

  fetchUserProfile(loginRes.username, (profileRes) => {
    console.log("Step 2:", profileRes);

    fetchUserOrders(profileRes.username, (ordersRes) => {
      console.log("Step 3:", ordersRes);
    });
  });
});
