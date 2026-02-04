class Payment:
    def pay(self, amount):
        print(f"Paying {amount} using generic payment method...")


class CreditCardPayment(Payment):
    def pay(self, amount):
        print(f"Paid {amount} using Credit Card")


class UPIPayment(Payment):
    def pay(self, amount):
        print(f"Paid {amount} using UPI")


class CashPayment(Payment):
    def pay(self, amount):
        print(f"Paid {amount} using Cash")


payments = [CreditCardPayment(), UPIPayment(), CashPayment()]

for p in payments:
    p.pay(1000)
