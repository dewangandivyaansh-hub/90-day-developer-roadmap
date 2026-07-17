import os

import pandas as pd

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

score = r2_score(

    y_test,

    predictions

)

print("\nStudent Marks Predictor")

print("-------------------------")

print(f"Model Accuracy (R²): {score:.2f}")

hours = float(input("\nEnter hours studied: "))

attendance = float(input("Enter attendance percentage: "))

new_student = pd.DataFrame({

    "Hours_Studied": [hours],

    "Attendance": [attendance]

})

predicted_marks = model.predict(

    new_student

)[0]

print(f"\nPredicted Marks: {predicted_marks:.2f}")

history = pd.DataFrame({

    "Hours_Studied": [hours],

    "Attendance": [attendance],

    "Predicted_Marks": [round(predicted_marks, 2)]

})

history.to_csv(

    "prediction_history.csv",

    mode="a",

    header=False,

    index=False

)

print("\nPrediction saved successfully!")

print("\nPrediction History")

print(pd.read_csv("prediction_history.csv"))