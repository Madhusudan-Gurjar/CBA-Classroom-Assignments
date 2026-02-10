import { useEffect, useState } from "react";

function EmployeeForm({ onSubmit, editEmployee, setMessage }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Developer");
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (editEmployee) {
      setName(editEmployee.name);
      setEmail(editEmployee.email);
      setRole(editEmployee.role);
      setActive(editEmployee.active);
    }
  }, [editEmployee]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const employee = {
      id: editEmployee ? editEmployee.id : Date.now(),
      name,
      email,
      role,
      active,
    };

    onSubmit(employee);

    setName("");
    setEmail("");
    setRole("Developer");
    setActive(true);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option>Developer</option>
        <option>Manager</option>
        <option>Tester</option>
      </select>

      <label>
        Active
        <input
          type="checkbox"
          checked={active}
          onChange={(e) => setActive(e.target.checked)}
        />
      </label>

      <button type="submit">
        {editEmployee ? "Update" : "Add"} Employee
      </button>
    </form>
  );
}

export default EmployeeForm;
