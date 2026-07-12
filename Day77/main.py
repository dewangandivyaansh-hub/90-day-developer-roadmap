import pandas as pd

from sklearn.model_selection import train_test_split


df = pd.read_csv(

    "students.csv"

)

X = df[

    [

        "Hours_Studied",

        "Attendance"

    ]

]

y = df["Marks"]

X_train, X_test, y_train, y_test = train_test_split(

    X,

    y,

    test_size=0.2,

    random_state=42

)

print("\nTraining Features\n")

print(X_train)

print("\nTesting Features\n")

print(X_test)

print("\nTraining Labels\n")

print(y_train)

print("\nTesting Labels\n")

print(y_test)

print("\nTraining Samples:")

print(len(X_train))

print("\nTesting Samples:")

print(len(X_test))