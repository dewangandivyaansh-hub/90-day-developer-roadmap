import pandas as pd
import os


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


students = load_students()

while True:

    print("\n===== AI Student Dashboard =====")

    print("1. Add Student")

    print("2. View Students")

    print("3. Search Student")

    print("4. Exit")

    choice = input("Choose: ")

    if choice == "1":

        students = add_student(students)

    elif choice == "2":

        view_students(students)

    elif choice == "3":

        search_student(students)

    elif choice == "4":

        print("Goodbye!")

        break

    else:

        print("Invalid choice.")