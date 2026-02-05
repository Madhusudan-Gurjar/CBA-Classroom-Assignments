
import React, { Component } from "react";

class Timer extends Component {
  constructor() {
    super();
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h2>Current Time: {this.state.time}</h2>
      </div>
    );
  }
}

export default Timer;
