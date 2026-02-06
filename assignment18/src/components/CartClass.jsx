import React from "react";

class CartClass extends React.Component {
  state = { count: 0 };

  render() {
    return (
      <div>
        <p>Quantity: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count > 0 ? this.state.count - 1 : 0
            })
          }
        >
          Decrement
        </button>
        <button onClick={() => this.setState({ count: 0 })}>
          Reset
        </button>
      </div>
    );
  }
}

export default CartClass;
