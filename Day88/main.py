import pandas as pd
import os

from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

FILE_NAME = "students.csv"


def load_students():

    if os.path.exists(FILE_NAME):

        return pd.read_csv(FILE_NAME)

    return pd.DataFrame(

        columns=[

            "Name",

            "Hours_Studied",

            "Attendance",

            "Marks"

        ]

    )


def save_students(data):

    data.to_csv(

        FILE_NAME,

        index=False

    )


def train_model(data):

    if len(data) < 5:

        return None

    X = data[

        [

            "Hours_Studied",

            "Attendance"

        ]

    ]

    y = data["Marks"]

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

    return model


def add_student(data):

    print("\n=== Add Student ===")

    name = input("Name: ")

    hours = float(input("Hours Studied: "))

    attendance = float(input("Attendance (%): "))

    marks = float(input("Marks: "))

    new_student = pd.DataFrame({

        "Name": [name],

        "Hours_Studied": [hours],

        "Attendance": [attendance],

        "Marks": [marks]

    })

    data = pd.concat(

        [data, new_student],

        ignore_index=True

    )

    save_students(data)

    print("\nStudent added successfully!")

    return data


def view_students(data):

    print("\n=== Student Records ===")

    if data.empty:

        print("No student records found.")

    else:

        print(data)


def search_student(data):

    name = input("\nEnter student name: ")

    result = data[

        data["Name"].str.lower() == name.lower()

    ]

    if result.empty:

        print("Student not found.")

    else:

        print(result)


def edit_student(data):

    name = input("\nEnter student name to edit: ")

    index = data[

        data["Name"].str.lower() == name.lower()

    ].index

    if len(index) == 0:

        print("Student not found.")

        return data

    i = index[0]

    print("\nEnter new details")

    data.at[i, "Hours_Studied"] = float(

        input("Hours Studied: ")

    )

    data.at[i, "Attendance"] = float(

        input("Attendance (%): ")

    )

    data.at[i, "Marks"] = float(

        input("Marks: ")

    )

    save_students(data)

    print("\nStudent updated successfully!")

    return data


def delete_student(data):

    name = input("\nEnter student name to delete: ")

    index = data[

        data["Name"].str.lower() == name.lower()

    ].index

    if len(index) == 0:

        print("Student not found.")

        return data

    data = data.drop(index)

    data = data.reset_index(drop=True)

    save_students(data)

    print("\nStudent deleted successfully!")

    return data


def statistics(data):

    if data.empty:

        print("\nNo student records found.")

        return

    print("\n===== Dashboard Statistics =====")

    print(f"\nTotal Students : {len(data)}")

    print(f"Average Marks : {data['Marks'].mean():.2f}")

    print(f"Highest Marks : {data['Marks'].max()}")

    print(f"Lowest Marks  : {data['Marks'].min()}")

    top = data.loc[

        data["Marks"].idxmax()

    ]

    low = data.loc[

        data["Marks"].idxmin()

    ]

    print(f"\nTop Performer : {top['Name']} ({top['Marks']})")

    print(f"Lowest Performer : {low['Name']} ({low['Marks']})")


def predict_marks(data):

    model = train_model(data)

    if model is None:

        print("\nAt least 5 student records are required.")

        return

    print("\n===== AI Prediction =====")

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

    print("\n===== Prediction =====")

    print(f"Predicted Marks : {marks}")

    print(f"Grade           : {grade}")

    print(f"Status          : {status}")


students = load_students()

while True:

    print("\n===== AI Student Dashboard =====")

    print("1. Add Student")

    print("2. View Students")

    print("3. Search Student")

    print("4. Edit Student")

    print("5. Delete Student")

    print("6. Dashboard Statistics")

    print("7. AI Marks Prediction")

    print("8. Exit")

    choice = input("Choose: ")

    if choice == "1":

        students = add_student(students)

    elif choice == "2":

        view_students(students)

    elif choice == "3":

        search_student(students)

    elif choice == "4":

        students = edit_student(students)

    elif choice == "5":

        students = delete_student(students)

    elif choice == "6":

        statistics(students)

    elif choice == "7":

        predict_marks(students)

    elif choice == "8":

        print("Goodbye!")

        break

    else:

        print("Invalid choice.")