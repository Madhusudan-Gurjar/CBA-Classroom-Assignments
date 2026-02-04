print("========== BASIC LEVEL ==========\n")

# 1) Create a dictionary with 5 students as keys and their marks as values
students_marks = {
    "Rahul": 85,
    "Priya": 92,
    "Amit": 78,
    "Neha": 88,
    "Sonal": 95
}
print("1) Students Marks Dictionary:", students_marks)

# 2) Print the value of grade from given dictionary
student = {"name": "Alice", "age": 20, "grade": "A"}
print("\n2) Grade of student:", student["grade"])

# 3) Add a new key "city" with value "New York" to an existing dictionary
student["city"] = "New York"
print("\n3) After adding city key:", student)

# 4) Update the price of apple to 60
prices = {"apple": 50, "banana": 20}
prices["apple"] = 60
print("\n4) Updated prices dictionary:", prices)


print("\n========== INTERMEDIATE LEVEL ==========\n")

# 5) Print all keys and values using a loop
print("5) All keys and values in students_marks:")
for key, value in students_marks.items():
    print(key, ":", value)

# 6) Check whether key "email" exists in dictionary
print("\n6) Checking if 'email' exists in student dictionary:")
if "email" in student:
    print("Key 'email' exists.")
else:
    print("Key 'email' does NOT exist.")

# 7) Frequency of each word in a list
words = ["apple", "banana", "apple", "orange", "banana", "apple"]
freq = {}

for word in words:
    if word in freq:
        freq[word] += 1
    else:
        freq[word] = 1

print("\n7) Word Frequency Dictionary:", freq)

# 8) Remove a specific key from dictionary
print("\n8) Removing key 'age' from student dictionary:")
removed_value = student.pop("age")   # removes key and returns its value
print("Removed age =", removed_value)
print("Updated student dictionary:", student)


print("\n========== ADVANCED LEVEL ==========\n")

# 9) Merge two dictionaries into one
dict1 = {"a": 1, "b": 2}
dict2 = {"c": 3, "d": 4}

merged_dict = {**dict1, **dict2}
print("9) Merged dictionary:", merged_dict)

# 10) Find student with highest marks
top_student = max(students_marks, key=students_marks.get)
print("\n10) Student with highest marks:", top_student)
print("    Highest marks:", students_marks[top_student])
