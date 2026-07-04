import pandas as pd


students = {

    "Name": [

        "Aarav",

        "Diya",

        "Kabir",

        "Meera",

        "Vivaan"

    ],

    "Age": [

        18,

        19,

        18,

        20,

        19

    ],

    "Marks": [

        88,

        95,

        79,

        91,

        84

    ]

}


df = pd.DataFrame(students)

print("Student Data\n")

print(df)

print("\nDataset Information\n")

print(df.info())

print("\nStatistics\n")

print(df.describe())

print("\nStudent Names\n")

print(df["Name"])

print("\nMarks Column\n")

print(df["Marks"])

print("\nAverage Marks")

print(df["Marks"].mean())