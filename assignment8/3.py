class Product:
    def __init__(self, product_id, name, price):
        self.product_id = product_id
        self.name = name
        self.price = price

    def apply_discount(self, percent):
        discount = self.price * (percent / 100)
        self.price -= discount
        print(f"Discount applied on {self.name}. New price: {self.price}")


class Cart:
    def __init__(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)
        print(f"{product.name} added to cart.")

    def total_price(self):
        total = 0
        for p in self.products:
            total += p.price
        return total


p1 = Product(1, "Laptop", 50000)
p2 = Product(2, "Mouse", 800)

p1.apply_discount(10)

cart = Cart()
cart.add_product(p1)
cart.add_product(p2)

print("Total Cart Price: ", cart.total_price())
