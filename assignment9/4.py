class Employee:
    def calculate_salary(self):
        pass


class FullTimeEmployee(Employee):
    def __init__(self, monthly_salary):
        self.monthly_salary = monthly_salary

    def calculate_salary(self):
        return self.monthly_salary


class PartTimeEmployee(Employee):
    def __init__(self, hourly_rate, hours):
        self.hourly_rate = hourly_rate
        self.hours = hours

    def calculate_salary(self):
        return self.hourly_rate * self.hours


class Intern(Employee):
    def __init__(self, stipend):
        self.stipend = stipend

    def calculate_salary(self):
        return self.stipend


employees = [
    FullTimeEmployee(50000),
    PartTimeEmployee(200, 80),
    Intern(10000)
]

for e in employees:
    print("Salary:", e.calculate_salary())
