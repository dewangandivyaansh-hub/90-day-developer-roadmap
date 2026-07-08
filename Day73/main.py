import matplotlib.pyplot as plt


activities = [

    "Study",

    "Sleep",

    "Exercise",

    "Entertainment",

    "Others"

]

hours = [

    7,

    8,

    2,

    3,

    4

]

colors = [

    "skyblue",

    "lightgreen",

    "orange",

    "violet",

    "gold"

]

explode = (

    0.05,

    0,

    0,

    0,

    0

)

plt.figure(

    figsize=(7, 7)

)

plt.pie(

    hours,

    labels=activities,

    autopct="%1.1f%%",

    colors=colors,

    explode=explode,

    startangle=90

)

plt.title(

    "Student Daily Time Allocation"

)

plt.axis("equal")

plt.show()