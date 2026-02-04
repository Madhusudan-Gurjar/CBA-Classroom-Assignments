const myPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded");
  }, 3000);
});

myPromise.then((msg) => console.log(msg));

