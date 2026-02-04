# 8. Sort by Absolute Value
# Sort numbers based on absolute value.

def sort_by_absolute(lst):
    return sorted(lst, key=abs)

print(sort_by_absolute([-10, 7, -3, 2, -1]))
