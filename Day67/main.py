import numpy as np


marks = np.array([

    [85, 90, 88],

    [78, 82, 80],

    [92, 95, 94],

    [70, 75, 72]

])

print("Student Marks Matrix\n")

print(marks)

print("\nShape:")

print(marks.shape)

print("\nFirst Student Marks:")

print(marks[0])

print("\nSecond Subject Marks:")

print(marks[:, 1])

print("\nHighest Mark:")

print(np.max(marks))

print("\nLowest Mark:")

print(np.min(marks))

print("\nAverage Marks:")

print(np.mean(marks))

print("\nAverage Marks of Each Student:")

print(np.mean(marks, axis=1))

print("\nAverage Marks of Each Subject:")

print(np.mean(marks, axis=0))