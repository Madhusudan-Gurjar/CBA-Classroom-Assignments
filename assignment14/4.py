def binary_search_recursive(arr, target, low, high):
    if low > high:
        return -1

    mid = (low + high) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] < target:
        return binary_search_recursive(arr, target, mid + 1, high)
    else:
        return binary_search_recursive(arr, target, low, mid - 1)


arr = [2, 4, 6, 8, 10, 12]
target = 6
print(arr)
print("target element is ",target)
print("index of target element is",binary_search_recursive(arr, target, 0, len(arr)-1))  # Output: 2
