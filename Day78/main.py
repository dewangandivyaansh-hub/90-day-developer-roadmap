import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LinearRegression


df = pd.read_csv("students.csv")

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

model = LinearRegression()

model.fit(

    X_train,

    y_train

)

predictions = model.predict(

    X_test

)

print("\nActual Marks")

print(

    y_test.values

)

print("\nPredicted Marks")

print(

    predictions.round(2)

)

print("\nModel Coefficients")

print(

    model.coef_

)

print("\nIntercept")

print(

    model.intercept_

)

new_student = pd.DataFrame(

    {

        "Hours_Studied": [8],

        "Attendance": [94]

    }

)

predicted_mark = model.predict(

    new_student

)

print(

    "\nPredicted Marks for Student"

)

print(

    predicted_mark[0].round(2)

)