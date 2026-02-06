import { useState } from "react";

function CartFunction() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Quantity: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        Decrement
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default CartFunction;
