import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LinearRegression


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

print("\n===== Student Performance Report =====")

hours = float(input("\nHours Studied: "))

attendance = float(input("Attendance (%): "))

student = pd.DataFrame({

    "Hours_Studied": [hours],

    "Attendance": [attendance]

})

predicted_marks = round(

    model.predict(student)[0],

    2

)

if predicted_marks >= 90:

    grade = "A+"

elif predicted_marks >= 80:

    grade = "A"

elif predicted_marks >= 70:

    grade = "B"

elif predicted_marks >= 60:

    grade = "C"

elif predicted_marks >= 50:

    grade = "D"

else:

    grade = "F"

status = "Pass" if predicted_marks >= 40 else "Fail"

print("\nPrediction Result")

print("-----------------------")

print(f"Predicted Marks : {predicted_marks}")

print(f"Grade           : {grade}")

print(f"Status          : {status}")

report = pd.DataFrame({

    "Hours_Studied": [hours],

    "Attendance": [attendance],

    "Predicted_Marks": [predicted_marks],

    "Grade": [grade],

    "Status": [status]

})

report.to_csv(

    "performance_report.csv",

    mode="a",

    header=False,

    index=False

)

print("\nPerformance report saved successfully!")

print("\nSaved Reports\n")

print(pd.read_csv("performance_report.csv"))