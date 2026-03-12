

n = int(input("Enter number of items: "))
total = 0.0

for i in range(n):
    price = float(input(f"Enter price of item {i+1}: "))
    total += price

discount = 0

if total > 5000:
    discount = total * 0.20
elif total > 2000:
    discount = total * 0.10

final_bill = total - discount

print("\nTotal Price:", total)
print("Discount:", discount)
print("Final Bill:", final_bill)