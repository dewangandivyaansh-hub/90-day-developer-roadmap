import matplotlib.pyplot as plt


students = [

    "Aarav",

    "Diya",

    "Kabir",

    "Meera",

    "Vivaan"

]

marks = [

    88,

    95,

    79,

    91,

    84

]

plt.plot(

    students,

    marks,

    marker="o"

)

plt.title(

    "Student Marks"

)

plt.xlabel(

    "Students"

)

plt.ylabel(

    "Marks"

)

plt.grid(True)

plt.show()