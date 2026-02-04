nums = [10, 20, 30, 40, 50]
rev = []

for i in range(len(nums)-1, -1, -1):
    rev.append(nums[i])

print("Original:", nums)
print("Reversed:", rev)
