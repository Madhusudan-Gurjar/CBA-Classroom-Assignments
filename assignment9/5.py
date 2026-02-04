from abc import ABC, abstractmethod

class Vehicle(ABC):

    @abstractmethod
    def start_engine(self):
        pass

    @abstractmethod
    def fuel_type(self):
        pass


class Car(Vehicle):
    def start_engine(self):
        print("Car engine started")

    def fuel_type(self):
        print("Fuel Type: Petrol/Diesel")


class Bike(Vehicle):
    def start_engine(self):
        print("Bike engine started")

    def fuel_type(self):
        print("Fuel Type: Petrol")


class ElectricScooter(Vehicle):
    def start_engine(self):
        print("Scooter motor started")

    def fuel_type(self):
        print("Fuel Type: Electric Battery")


vehicles = [Car(), Bike(), ElectricScooter()]

for v in vehicles:
    v.start_engine()
    v.fuel_type()
    print("-----------")
