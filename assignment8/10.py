class Company:
    def __init__(self, company_name):
        self.company_name = company_name


class Department(Company):
    def __init__(self, company_name, department_name):
        super().__init__(company_name)
        self.department_name = department_name


class Employee(Department):
    def __init__(self, company_name, department_name, employee_name, salary):
        super().__init__(company_name, department_name)
        self.employee_name = employee_name
        self.salary = salary

    def display_details(self):
        print("Company:", self.company_name)
        print("Department:", self.department_name)
        print("Employee:", self.employee_name)
        print("Salary:", self.salary)


e1 = Employee("TCS", "IT", "Madhu", 50000)
e1.display_details()
