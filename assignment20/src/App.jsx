import { useEffect, useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import EmployeeListClass from "./components/EmployeeListClass";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editEmployee, setEditEmployee] = useState(null);
  const [message, setMessage] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log("Employee list updated");
  }, [employees]);

  const addOrUpdateEmployee = (employee) => {
    if (editEmployee) {
      setEmployees(
        employees.map((emp) =>
          emp.id === employee.id ? employee : emp
        )
      );
      setEditEmployee(null);
      setMessage("Employee Updated Successfully");
    } else {
      setEmployees([...employees, employee]);
      setMessage("Employee Added Successfully");
    }
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  const filteredEmployees =
    filter === "all"
      ? employees
      : employees.filter((e) =>
          filter === "active" ? e.active : !e.active
        );

  return (
    <div>
      <h2>Total Employees: {employees.length}</h2>

      <EmployeeForm
        onSubmit={addOrUpdateEmployee}
        editEmployee={editEmployee}
        setMessage={setMessage}
      />

      {message && <p style={{ color: "green" }}>{message}</p>}

      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("inactive")}>Inactive</button>

      <EmployeeList
        employees={filteredEmployees}
        onDelete={deleteEmployee}
        onEdit={setEditEmployee}
      />

      <h3>Class Component Version</h3>
      <EmployeeListClass employees={employees} />
    </div>
  );
}

export default App;
