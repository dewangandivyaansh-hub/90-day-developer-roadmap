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

students = []

print("\n===== Student Result Analyzer =====")

count = int(input("\nHow many students? "))

for i in range(count):

    print(f"\nStudent {i + 1}")

    name = input("Name: ")

    hours = float(input("Hours Studied: "))

    attendance = float(input("Attendance (%): "))

    new_student = pd.DataFrame({

        "Hours_Studied": [hours],

        "Attendance": [attendance]

    })

    predicted_marks = round(

        model.predict(new_student)[0],

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

    students.append({

        "Student": name,

        "Hours_Studied": hours,

        "Attendance": attendance,

        "Predicted_Marks": predicted_marks,

        "Grade": grade,

        "Status": status

    })

report = pd.DataFrame(students)

report.to_csv(

    "class_report.csv",

    index=False

)

print("\n===== Class Summary =====")

print(report)

print("\nAverage Marks:")

print(round(report["Predicted_Marks"].mean(), 2))

print("\nHighest Marks:")

print(report["Predicted_Marks"].max())

print("\nLowest Marks:")

print(report["Predicted_Marks"].min())

print("\nPass Count:")

print(len(report[report["Status"] == "Pass"]))

print("\nFail Count:")

print(len(report[report["Status"] == "Fail"]))

print("\nClass report saved successfully!")