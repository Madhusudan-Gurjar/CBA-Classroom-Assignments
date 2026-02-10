function EmployeeCard({ employee, onDelete, onEdit }) {
  return (
    <div style={{ border: "1px solid black", margin: "10px" }}>
      <h4>{employee.name}</h4>
      <p>{employee.email}</p>
      <p>{employee.role}</p>
      {/* <p>{employee.id}</p> */}

      {employee.active ? (
        <span style={{ color: "green" }}>Active</span>
      ) : (
        <span style={{ color: "red" }}>Inactive</span>
      )}

      <br />

      <button onClick={() => onEdit(employee)}>Edit</button>
      <button onClick={() => onDelete(employee.id)}>Delete</button>
    </div>
  );
}

export default EmployeeCard;
