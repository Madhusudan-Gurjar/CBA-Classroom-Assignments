def count_occurrences(arr, target):
    count = 0
    for num in arr:
        if num == target:
            count += 1
    return count


arr = [5, 3, 5, 2, 5, 1]
target = 5
print(arr)
print("target element is ",target)
print("no. of occurrence ",count_occurrences(arr, target))  # Output: 3
