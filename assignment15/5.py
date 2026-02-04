# 5. Sort Tuples by Second Value
# Given a list of tuples (name, score), sort the list by score in ascending order.

def sort_by_score(data):
    return sorted(data, key=lambda x: x[1])

print(sort_by_score([("Alice", 88), ("Bob", 75), ("Charlie", 92)]))
