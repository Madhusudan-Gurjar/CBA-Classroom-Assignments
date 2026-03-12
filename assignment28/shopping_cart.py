

n = int(input("Enter number of items: "))
total = 0

for i in range(n):
    price = float(input(f"Enter item {i+1} price: "))
    quantity = int(input("Enter quantity: "))
    total += price * quantity

if total > 3000:
    shipping = 0
else:
    shipping = 100

final_amount = total + shipping

print("\nCart Total:", total)
print("Shipping Charge:", shipping)
print("Final Amount:", final_amount)