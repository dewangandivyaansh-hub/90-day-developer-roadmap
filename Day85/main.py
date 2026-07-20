import pandas as pd

import matplotlib.pyplot as plt

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

count = int(input("How many students? "))

for i in range(count):

    print(f"\nStudent {i+1}")

    name = input("Name: ")

    hours = float(input("Hours Studied: "))

    attendance = float(input("Attendance (%): "))

    sample = pd.DataFrame({

        "Hours_Studied": [hours],

        "Attendance": [attendance]

    })

    marks = round(

        model.predict(sample)[0],

        2

    )

    if marks >= 90:

        grade = "A+"

    elif marks >= 80:

        grade = "A"

    elif marks >= 70:

        grade = "B"

    elif marks >= 60:

        grade = "C"

    elif marks >= 50:

        grade = "D"

    else:

        grade = "F"

    status = "Pass" if marks >= 40 else "Fail"

    students.append({

        "Student": name,

        "Hours_Studied": hours,

        "Attendance": attendance,

        "Predicted_Marks": marks,

        "Grade": grade,

        "Status": status

    })

report = pd.DataFrame(students)

report.to_csv(

    "class_report.csv",

    index=False

)

plt.figure(

    figsize=(12,5)

)

plt.subplot(1,2,1)

plt.bar(

    report["Student"],

    report["Predicted_Marks"],

    color="skyblue",

    edgecolor="black"

)

plt.title("Predicted Marks")

plt.ylabel("Marks")

plt.ylim(0,100)

plt.subplot(1,2,2)

grade_counts = report["Grade"].value_counts()

plt.pie(

    grade_counts,

    labels=grade_counts.index,

    autopct="%1.1f%%",

    startangle=90

)

plt.title("Grade Distribution")

plt.axis("equal")

plt.tight_layout()

plt.savefig("dashboard.png")

plt.show()

print("\n===== Class Summary =====")

print(report)

print(f"\nAverage Marks : {report['Predicted_Marks'].mean():.2f}")

print(f"Highest Marks : {report['Predicted_Marks'].max()}")

print(f"Lowest Marks  : {report['Predicted_Marks'].min()}")

print(f"Pass Students : {len(report[report['Status']=='Pass'])}")

print(f"Fail Students : {len(report[report['Status']=='Fail'])}")

print("\nDashboard saved as dashboard.png")