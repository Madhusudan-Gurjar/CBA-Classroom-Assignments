
import React, { Component } from "react";

class ToggleMessage extends Component {
  constructor() {
    super();
    this.state = { isVisible: true };
  }

  toggle = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div>
        {this.state.isVisible && <h3>Hello! This message can disappear.</h3>}
        <button onClick={this.toggle}>Toggle Message</button>
      </div>
    );
  }
}

export default ToggleMessage;
