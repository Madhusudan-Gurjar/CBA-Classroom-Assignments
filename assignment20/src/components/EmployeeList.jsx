import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees, onDelete, onEdit }) {
  return (
    <div>
      {employees.map((emp) => (
        <EmployeeCard
          key={emp.id}
          employee={emp}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default EmployeeList;

