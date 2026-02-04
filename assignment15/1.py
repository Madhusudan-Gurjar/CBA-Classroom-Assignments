# 1. Basic List Sort
# Given a list of integers, write a function that sorts the list
# without using the built-in sort() or sorted() functions.

def basic_sort(lst):
    n = len(lst)
    for i in range(n):
        min_index = i
        for j in range(i + 1, n):
            if lst[j] < lst[min_index]:
                min_index = j
        lst[i], lst[min_index] = lst[min_index], lst[i]
    return lst

print(basic_sort([5, 2, 9, 1, 5, 6]))
