import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <nav style={{ padding: "15px", background: "#eee" }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Products</Link> |{" "}
        <Link to="/cart">Cart ({cart.length})</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/products" 
          element={<Products setCart={setCart} />} 
        />
        <Route 
          path="/products/:id" 
          element={<ProductDetails setCart={setCart} />} 
        />
        <Route 
          path="/cart" 
          element={<Cart cart={cart} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
