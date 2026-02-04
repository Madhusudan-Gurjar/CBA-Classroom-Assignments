# 10. Implement Bubble Sort
# Return sorted list and count number of swaps.

def bubble_sort(lst):
    n = len(lst)
    swap_count = 0

    for i in range(n):
        for j in range(0, n - i - 1):
            if lst[j] > lst[j + 1]:
                lst[j], lst[j + 1] = lst[j + 1], lst[j]
                swap_count += 1

    return lst, swap_count

sorted_list, swaps = bubble_sort([5, 1, 4, 2, 8])
print("Sorted:", sorted_list)
print("Swaps:", swaps)
