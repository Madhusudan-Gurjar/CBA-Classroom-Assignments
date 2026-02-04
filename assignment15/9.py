# 9. Multi-Level Sorting
# Sort by age ascending, then name alphabetically.

def multi_level_sort(data):
    return sorted(data, key=lambda x: (x[1], x[0]))

print(multi_level_sort([("Alice", 25), ("Bob", 20), ("Charlie", 20)]))
