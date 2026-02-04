from abc import ABC, abstractmethod

class Order(ABC):
    def __init__(self, order_id, customer):
        self.order_id = order_id
        self.customer = customer

    @abstractmethod
    def process_order(self):
        pass

    def order_summary(self):
        print(f"Order ID: {self.order_id}")
        print(f"Customer: {self.customer}")


class FoodOrder(Order):
    def process_order(self):
        self.order_summary()
        print("Processing Food Order: Preparing food and delivery assigned")


class GroceryOrder(Order):
    def process_order(self):
        self.order_summary()
        print("Processing Grocery Order: Packing groceries and delivery assigned")


class MedicineOrder(Order):
    def process_order(self):
        self.order_summary()
        print("Processing Medicine Order: Validating prescription and delivery assigned")


orders = [
    FoodOrder(101, "Madhu"),
    GroceryOrder(102, "Rahul"),
    MedicineOrder(103, "Neha")
]

for o in orders:
    o.process_order()
    print("-----------")
