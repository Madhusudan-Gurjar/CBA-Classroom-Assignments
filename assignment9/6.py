from abc import ABC, abstractmethod

class BankAccount(ABC):
    def __init__(self, balance=0):
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}. Balance: {self.balance}")

    @abstractmethod
    def calculate_interest(self):
        pass


class SavingsAccount(BankAccount):
    def calculate_interest(self):
        interest = self.balance * 0.04
        print(f"Savings Interest: {interest}")
        return interest


class CurrentAccount(BankAccount):
    def calculate_interest(self):
        interest = self.balance * 0.01
        print(f"Current Interest: {interest}")
        return interest


accounts = [SavingsAccount(10000), CurrentAccount(10000)]

for acc in accounts:
    acc.deposit(2000)
    acc.calculate_interest()
    print("-----------")
