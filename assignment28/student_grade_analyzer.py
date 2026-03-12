

n = int(input("Enter number of subjects: "))
total = 0

for i in range(n):
    marks = int(input(f"Enter marks for subject {i+1}: "))
    total += marks

average = total / n

if average >= 90:
    grade = "A"
elif average >= 75:
    grade = "B"
elif average >= 60:
    grade = "C"
elif average >= 40:
    grade = "D"
else:
    grade = "Fail"

print("\nTotal Marks:", total)
print("Average:", average)
print("Grade:", grade)