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

plt.figure(

    figsize=(8, 5)

)

bars = plt.bar(

    subjects,

    marks,

    color="skyblue",

    edgecolor="black"

)

for bar in bars:

    height = bar.get_height()

    plt.text(

        bar.get_x() + bar.get_width() / 2,

        height + 1,

        str(height),

        ha="center"

    )

plt.title(

    "Subject-wise Marks Comparison"

)

plt.xlabel(

    "Subjects"

)

plt.ylabel(

    "Marks"

)

plt.ylim(0, 100)

plt.grid(

    axis="y",

    linestyle="--",

    alpha=0.5

)

plt.show()