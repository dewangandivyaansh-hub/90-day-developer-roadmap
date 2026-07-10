import pandas as pd
import matplotlib.pyplot as plt


df = pd.read_csv("students.csv")

subjects = [

    "Math",

    "Physics",

    "Chemistry",

    "Computer",

    "English"

]

average_marks = [

    df["Math"].mean(),

    df["Physics"].mean(),

    df["Chemistry"].mean(),

    df["Computer"].mean(),

    df["English"].mean()

]

student_totals = df[subjects].sum(axis=1)

plt.figure(

    figsize=(15, 5)

)

# ------------------------------

plt.subplot(1, 3, 1)

plt.bar(

    subjects,

    average_marks,

    color="skyblue",

    edgecolor="black"

)

plt.title(

    "Average Subject Marks"

)

plt.ylim(0, 100)

# ------------------------------

plt.subplot(1, 3, 2)

plt.plot(

    df["Name"],

    student_totals,

    marker="o",

    color="green"

)

plt.title(

    "Total Marks"

)

plt.ylabel("Marks")

plt.grid(True)

# ------------------------------

plt.subplot(1, 3, 3)

plt.pie(

    average_marks,

    labels=subjects,

    autopct="%1.1f%%",

    startangle=90

)

plt.title(

    "Subject Contribution"

)

plt.axis("equal")

plt.tight_layout()

plt.savefig(

    "dashboard.png"

)

plt.show()

print("\nAverage Marks\n")

print(

    pd.Series(

        average_marks,

        index=subjects

    )

)

print("\nHighest Total")

print(

    student_totals.max()

)

print("\nLowest Total")

print(

    student_totals.min()

)