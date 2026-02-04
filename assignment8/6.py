class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


class Doctor(Person):
    def __init__(self, name, age, specialization):
        super().__init__(name, age)
        self.specialization = specialization

    def display(self):
        print(f"Doctor Name: {self.name}, Age: {self.age}, Specialization: {self.specialization}")


class Patient(Person):
    def __init__(self, name, age, disease):
        super().__init__(name, age)
        self.disease = disease

    def display(self):
        print(f"Patient Name: {self.name}, Age: {self.age}, Disease: {self.disease}")


doc1 = Doctor("Dr. Sharma", 45, "Cardiologist")
pat1 = Patient("Ankit", 25, "Fever")

doc1.display()
pat1.display()
