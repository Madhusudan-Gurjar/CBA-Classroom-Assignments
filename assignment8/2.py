class Employee:
    def __init__(self, name):
        self.name = name
        self.__salary = 0   # private

    def set_salary(self, salary):
        if salary > 0:
            self.__salary = salary
        else:
            print("Salary must be positive!")

    def get_salary(self):
        return self.__salary

    def annual_salary(self):
        return self.__salary * 12


emp = Employee("Rahul")
emp.set_salary(35000)

print("Monthly Salary:", emp.get_salary())
print("Annual Salary:", emp.annual_salary())
