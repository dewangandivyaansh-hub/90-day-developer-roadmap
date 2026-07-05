import pandas as pd


df = pd.read_csv("students.csv")

print("Student Dataset\n")

print(df)

print("\nStudents Scoring Above 85\n")

print(

    df[df["Marks"] > 85]

)

print("\nSorted by Marks (Highest First)\n")

print(

    df.sort_values(

        by="Marks",

        ascending=False

    )

)

print("\nAverage Marks")

print(

    df["Marks"].mean()

)

print("\nHighest Marks")

print(

    df["Marks"].max()

)

print("\nLowest Marks")

print(

    df["Marks"].min()

)

top_students = df[df["Marks"] > 90]

top_students.to_csv(

    "top_students.csv",

    index=False

)

print("\nTop students saved to top_students.csv")