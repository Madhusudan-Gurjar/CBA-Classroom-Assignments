const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data loaded");
    // reject("Something went wrong"); // test error
  }, 3000);
});

async function loadData() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

loadData();
