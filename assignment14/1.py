def find_index(arr, target):
    for i in range(len(arr)):
        if arr[i] == target:
            return i
    return -1


arr = [4, 2, 7, 1, 9]
target = 7
print(arr)
print("target element is ",target)
print("index of target element is ",find_index(arr, target))  
