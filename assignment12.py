import numpy as np

print("========== Python Lists (Basics) ==========\n")

# 1) Create a list of integers from 1 to 10. Print the list.
nums = list(range(1, 11))
print("1) List from 1 to 10:", nums)

# 2) Given a list [5, 10, 15, 20, 25], access and print the third element.
lst = [5, 10, 15, 20, 25]
print("2) Third element:", lst[2])   # index 2 = third element

# 3) Find length of a list without using len()
count = 0
for _ in lst:
    count += 1
print("3) Length without len():", count)

# 4) Add the number 50 to the end of the list [10, 20, 30, 40]
lst2 = [10, 20, 30, 40]
lst2.append(50)
print("4) After adding 50:", lst2)

# 5) Remove the element 30 from list [10, 20, 30, 40, 50]
lst3 = [10, 20, 30, 40, 50]
lst3.remove(30)
print("5) After removing 30:", lst3)

# 6) Reverse list [1, 2, 3, 4, 5]
lst4 = [1, 2, 3, 4, 5]
lst4.reverse()
print("6) Reversed list:", lst4)

# 7) Find max and min in a list
numbers = [12, 45, 2, 89, 34, 5]
print("7) Numbers:", numbers)
print("   Max:", max(numbers))
print("   Min:", min(numbers))

# 8) Check if an element exists in a list
element = 89
if element in numbers:
    print("8) Element", element, "exists in the list")
else:
    print("8) Element", element, "does NOT exist in the list")

# 9) Squares from 1 to 10 using list comprehension
squares = [x*x for x in range(1, 11)]
print("9) Squares from 1 to 10:", squares)

# 10) Merge two lists [1, 2, 3] and [4, 5, 6]
a = [1, 2, 3]
b = [4, 5, 6]
merged = a + b
print("10) Merged list:", merged)


print("\n========== NumPy Arrays (Basics) ==========\n")

# 1) Create a NumPy array containing numbers from 1 to 10.
arr1 = np.arange(1, 11)
print("1) NumPy array 1 to 10:", arr1)

# 2) Create a NumPy array of zeros with size 5.
zeros_arr = np.zeros(5)
print("2) Zeros array (size 5):", zeros_arr)

# 3) Create a NumPy array of ones with shape (3, 3).
ones_arr = np.ones((3, 3))
print("3) Ones array (3x3):\n", ones_arr)

# 4) Convert list [2, 4, 6, 8, 10] into NumPy array.
my_list = [2, 4, 6, 8, 10]
arr2 = np.array(my_list)
print("4) Converted NumPy array:", arr2)

# 5) Find shape, size, and datatype of a NumPy array.
print("5) Shape:", arr2.shape)
print("   Size:", arr2.size)
print("   Data type:", arr2.dtype)

# 6) Access element at row 2, column 3 of 2D array
arr2d = np.array([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])
print("6) 2D Array:\n", arr2d)
print("   Element at row 2 col 3:", arr2d[1, 2])  # row=2 => index 1, col=3 => index 2

# 7) Element-wise addition of two NumPy arrays
x = np.array([10, 20, 30])
y = np.array([1, 2, 3])
add_result = x + y
print("7) Element-wise addition:", add_result)

# 8) Multiply every element of NumPy array by 5
mul_result = x * 5
print("8) Multiply each element by 5:", mul_result)

# 9) Sum and mean of NumPy array
print("9) Sum:", np.sum(x))
print("   Mean:", np.mean(x))

# 10) Reshape NumPy array of size 12 into shape (3,4)
arr12 = np.arange(1, 13)
reshaped = arr12.reshape(3, 4)
print("10) Original array:", arr12)
print("    Reshaped (3x4):\n", reshaped)

