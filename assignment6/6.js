async function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Product 1", "Product 2", "Product 3"]);
    }, 2000);
  });
}

async function getOrders() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["Order A", "Order B"]);
    }, 1000);
  });
}

async function run() {
  const products = await getProducts();
  console.log("Products:", products);

  const orders = await getOrders();
  console.log("Orders:", orders);
}

run();
