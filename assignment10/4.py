nums = [1, 2, 2, 3, 4, 4, 5]
unique = []

for x in nums:
    if x not in unique:
        unique.append(x)

print("Original list:", nums)
print("List without duplicates:", unique)
