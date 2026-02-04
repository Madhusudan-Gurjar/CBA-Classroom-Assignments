class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model

    def start(self):
        print(f"{self.brand} {self.model} is starting...")


class Car(Vehicle):
    def __init__(self, brand, model, number_of_doors):
        super().__init__(brand, model)
        self.number_of_doors = number_of_doors

    def display(self):
        print(f"Car: {self.brand} {self.model}, Doors: {self.number_of_doors}")


class Bike(Vehicle):
    def __init__(self, brand, model, engine_cc):
        super().__init__(brand, model)
        self.engine_cc = engine_cc

    def display(self):
        print(f"Bike: {self.brand} {self.model}, Engine: {self.engine_cc}cc")


car1 = Car("Honda", "City", 4)
bike1 = Bike("Yamaha", "R15", 155)

car1.start()
car1.display()

bike1.start()
bike1.display()
