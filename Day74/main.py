import matplotlib.pyplot as plt


subjects = [

    "Math",

    "Physics",

    "Chemistry",

    "Computer",

    "English"

]

marks = [

    92,

    88,

    85,

    97,

    90

]

hours = [

    7,

    8,

    2,

    3,

    4

]

activities = [

    "Study",

    "Sleep",

    "Exercise",

    "Entertainment",

    "Others"

]


plt.figure(

    figsize=(15, 5)

)

# -------------------------

plt.subplot(1, 3, 1)

plt.plot(

    subjects,

    marks,

    marker="o",

    color="blue"

)

plt.title(

    "Marks Trend"

)

plt.xlabel("Subjects")

plt.ylabel("Marks")

plt.grid(True)

# -------------------------

plt.subplot(1, 3, 2)

bars = plt.bar(

    subjects,

    marks,

    color="skyblue",

    edgecolor="black"

)

for bar in bars:

    plt.text(

        bar.get_x() + bar.get_width()/2,

        bar.get_height() + 1,

        str(bar.get_height()),

        ha="center"

    )

plt.title(

    "Marks Comparison"

)

plt.ylim(0, 100)

# -------------------------

plt.subplot(1, 3, 3)

plt.pie(

    hours,

    labels=activities,

    autopct="%1.1f%%",

    startangle=90

)

plt.title(

    "Daily Time Allocation"

)

plt.axis("equal")

# -------------------------

plt.tight_layout()

plt.savefig(

    "dashboard.png"

)

plt.show()