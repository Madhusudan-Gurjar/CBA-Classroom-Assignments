import React from "react";

class EmployeeListClass extends React.Component {
  componentDidMount() {
    console.log("EmployeeListClass Mounted");
  }

  componentDidUpdate(prevProps) {
    if (prevProps.employees !== this.props.employees) {
      console.log("EmployeeListClass Updated");
    }
  }

  componentWillUnmount() {
    console.log("EmployeeListClass Unmounted");
  }

  render() {
    return (
      <ul>
        {this.props.employees.map((emp) => (
          <li key={emp.id}>
            {emp.name} - {emp.role}
          </li>
        ))}
      </ul>
    );
  }
}

export default EmployeeListClass;
