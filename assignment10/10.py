nums = [1, 2, 3, 4, 5]
print("original :",nums)
last = nums[-1]
for i in range(len(nums)-1, 0, -1):
    nums[i] = nums[i-1]
nums[0] = last

print("Rotated list:", nums)
