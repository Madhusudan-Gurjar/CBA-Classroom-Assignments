import { useParams, Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Tablet", price: 30000 }
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === parseInt(id)
  );

  if (!product) {
    return <h3>Product Not Found</h3>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Price:</strong> ₹{product.price}</p>

      <Link to="/products">Back to Products</Link>
    </div>
  );
}

export default ProductDetails;
