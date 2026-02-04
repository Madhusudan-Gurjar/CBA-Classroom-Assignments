# 7. Custom Sort: Even Before Odd
# All even numbers first, odd numbers after. Each group sorted ascending.

def even_before_odd(lst):
    return sorted(lst, key=lambda x: (x % 2, x))

print(even_before_odd([5, 2, 8, 1, 4, 7]))
