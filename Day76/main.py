import pandas as pd


df = pd.read_csv(

    "students.csv"

)

print(

    "\nStudent Dataset\n"

)

print(df)

print(

    "\nDataset Information\n"

)

df.info()

print(

    "\nFeatures (Input)\n"

)

X = df[

    [

        "Hours_Studied",

        "Attendance"

    ]

]

print(X)

print(

    "\nLabels (Output)\n"

)

y = df["Marks"]

print(y)

print(

    "\nAverage Marks"

)

print(

    y.mean()

)

print(

    "\nHighest Marks"

)

print(

    y.max()

)

print(

    "\nLowest Marks"

)

print(

    y.min()

)