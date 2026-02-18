import styles from "../styles/Cart.module.css";

function Cart({ cart }) {
  if (cart.length === 0) {
    return <h3 style={{ padding: "20px" }}>Cart is Empty</h3>;
  }

  return (
    <div className={styles.cart}>
      <h2>Cart Items</h2>

      {cart.map((item, index) => (
        <div key={index} className={styles.item}>
          <p>{item.title}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
