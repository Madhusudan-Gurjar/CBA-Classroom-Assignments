nums = [12, 5, 8, 9, 20, 33, 14]
count=0
print("Original list ",nums)
print("Even numbers are:")
for x in nums:
    if x % 2 == 0:
        print(x)
        count+=1

print("Count of even numbers:", count)
