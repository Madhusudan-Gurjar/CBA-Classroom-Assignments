nums = [10, 20, 30, 40, 50]
key = int(input("Enter element to search: "))

found = False
for i in range(len(nums)):
    if nums[i] == key:
        print("Element found at index:", i)
        found = True
        break

if not found:
    print("Element not found in the list.")

