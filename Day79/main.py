import pandas as pd

from sklearn.model_selection import train_test_split

from sklearn.linear_model import LinearRegression

from sklearn.metrics import (

    mean_absolute_error,

    mean_squared_error,

    r2_score

)

import math


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

print(y_test.values)

print("\nPredicted Marks")

print(predictions.round(2))

mae = mean_absolute_error(

    y_test,

    predictions

)

mse = mean_squared_error(

    y_test,

    predictions

)

rmse = math.sqrt(mse)

r2 = r2_score(

    y_test,

    predictions

)

print("\nModel Evaluation")

print("------------------------")

print(f"MAE  : {mae:.2f}")

print(f"MSE  : {mse:.2f}")

print(f"RMSE : {rmse:.2f}")

print(f"R² Score : {r2:.2f}")