import pandas as pd

import matplotlib.pyplot as plt

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LinearRegression

from sklearn.metrics import r2_score


df = pd.read_csv("students.csv")

X = df[["Hours_Studied", "Attendance"]]

y = df["Marks"]


X_train, X_test, y_train, y_test = train_test_split(

    X,

    y,

    test_size=0.2,

    random_state=42

)

model = LinearRegression()

model.fit(

    X_train,

    y_train

)

predictions = model.predict(

    X_test

)

print("\nActual Marks")

print(y_test.values)

print("\nPredicted Marks")

print(predictions.round(2))

print(f"\nR² Score: {r2_score(y_test, predictions):.2f}")

new_student = pd.DataFrame({

    "Hours_Studied": [8],

    "Attendance": [94]

})

predicted = model.predict(new_student)

print(

    f"\nPredicted Marks for New Student: {predicted[0]:.2f}"

)

plt.figure(figsize=(8,5))

plt.plot(

    y_test.values,

    marker="o",

    label="Actual"

)

plt.plot(

    predictions,

    marker="s",

    label="Predicted"

)

plt.title("Actual vs Predicted Marks")

plt.xlabel("Student")

plt.ylabel("Marks")

plt.grid(True)

plt.legend()

plt.savefig("prediction_chart.png")

plt.show()