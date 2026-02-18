import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails({ setCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <img src={product.image} width="200" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>

      <button onClick={() => setCart(prev => [...prev, product])}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductDetails;
