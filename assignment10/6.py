nums = [10, 55, 23, 90, 15]
print("Original:", nums)
largest = nums[0]
for x in nums:
    if x > largest:
        largest = x

print("Largest number:", largest)
