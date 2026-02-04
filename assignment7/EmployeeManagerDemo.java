class Employee {
    String name;
    double salary;

    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public void display_info() {
        System.out.println("Employee Name: " + name);
        System.out.println("Salary: " + salary);
    }
}

class Manager extends Employee {
    String department;

    public Manager(String name, double salary, String department) {
        super(name, salary);
        this.department = department;
    }

    @Override
    public void display_info() {
        System.out.println("Manager Name: " + name);
        System.out.println("Salary: " + salary);
        System.out.println("Department: " + department);
    }
}

public class EmployeeManagerDemo {
    public static void main(String[] args) {
        Employee emp = new Employee("Amit", 40000);
        System.out.println("---- Employee Info ----");
        emp.display_info();

        System.out.println();

        Manager mgr = new Manager("Rahul", 80000, "IT");
        System.out.println("---- Manager Info ----");
        mgr.display_info();
    }
}
