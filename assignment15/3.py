# 3. Sort Strings Alphabetically
# Given a list of strings, sort them alphabetically ignoring case sensitivity.

def sort_strings_case_insensitive(words):
    return sorted(words, key=str.lower)

print(sort_strings_case_insensitive(["banana", "Apple", "cherry"]))
