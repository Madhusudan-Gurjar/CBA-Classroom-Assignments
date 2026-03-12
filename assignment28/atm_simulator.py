

balance = 10000

while True:
    amount = int(input("Enter amount to withdraw (0 to exit): "))

    if amount == 0:
        break

    if amount > balance:
        print("Insufficient Balance!")
    else:
        balance -= amount
        print("Withdrawal Successful")
        print("Remaining Balance:", balance)