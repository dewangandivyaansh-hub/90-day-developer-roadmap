import numpy as np


scores = np.random.randint(40, 101, 12)

print("Random Student Scores\n")

print(scores)

print("\nSorted Scores:")

print(np.sort(scores))

print("\nScores Above 75:")

print(scores[scores > 75])

print("\nAverage Score:")

print(np.mean(scores))

print("\nHighest Score:")

print(np.max(scores))

print("\nLowest Score:")

print(np.min(scores))

print("\nReshaped Matrix (3 x 4):")

matrix = scores.reshape(3, 4)

print(matrix)

print("\nFlattened Array:")

print(matrix.flatten())