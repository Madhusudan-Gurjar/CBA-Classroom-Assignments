import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Product.module.css";

function Products({ setCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=6")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, []);

  if (loading) return <h3>Loading...</h3>;
  if (error) return <h3 style={{color:"red"}}>{error}</h3>;

  return (
    <div className={styles.grid}>
      {products.map(product => (
        <div key={product.id} className={styles.card}>
          <img src={product.image} alt={product.title} />
          <h4>{product.title}</h4>
          <p>${product.price}</p>

          <Link to={`/products/${product.id}`}>View</Link>
          <button onClick={() => setCart(prev => [...prev, product])}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
