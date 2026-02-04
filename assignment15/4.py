# 4. Sort by String Length
# Given a list of strings, sort them based on their length,
# from shortest to longest.

def sort_by_length(words):
    return sorted(words, key=len)

print(sort_by_length(["cat", "elephant", "dog", "a"]))
