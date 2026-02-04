class BankAccount:
    def __init__(self, account_number, account_holder, balance=0):
        self.account_number = account_number
        self.account_holder = account_holder
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        print(f"Deposited {amount}rs into {self.account_holder}'s account.")

    def withdraw(self, amount):
        if amount > self.balance:
            print("Insufficient balance!")
        else:
            self.balance -= amount
            print(f"Withdrawn {amount}rs from {self.account_holder}'s account.")

    def display_balance(self):
        print(f"{self.account_holder}'s Balance: {self.balance}rs")


# Creating 2 accounts
acc1 = BankAccount(101, "Amit", 5000)
acc2 = BankAccount(102, "Riya", 3000)

acc1.deposit(2000)
acc1.withdraw(1000)
acc1.display_balance()

acc2.deposit(500)
acc2.withdraw(4000)
acc2.display_balance()
