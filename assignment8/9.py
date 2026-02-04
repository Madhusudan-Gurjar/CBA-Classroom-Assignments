class Payment:
    def pay(self, amount):
        print(f"Paying {amount} using Payment System.")


class CreditCardPayment(Payment):
    def pay(self, amount):
        print(f"Paid {amount} using Credit Card.")


class UPIPayment(Payment):
    def pay(self, amount):
        print(f"Paid {amount} using UPI.")


class CashPayment(Payment):
    def pay(self, amount):
        print(f"Paid {amount} using Cash.")


p1 = CreditCardPayment()
p2 = UPIPayment()
p3 = CashPayment()

p1.pay(500)
p2.pay(300)
p3.pay(1000)
