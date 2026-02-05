
import React, { Component } from "react";

class Student extends Component {
  render() {
    return (
      <div>
        <h3>Student Name: {this.props.name}</h3>
        <p>Course: {this.props.course}</p>
      </div>
    );
  }
}

export default Student;
