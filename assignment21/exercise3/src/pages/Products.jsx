import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];

function Products() {
  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <Link to={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
