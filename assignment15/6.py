# 6. Sort Dictionaries by Value
# Sort dictionary items by age (value) from youngest to oldest.

def sort_dict_by_value(d):
    return sorted(d.items(), key=lambda item: item[1])

people = {"Alice": 25, "Bob": 20, "Charlie": 23}
print(sort_dict_by_value(people))
