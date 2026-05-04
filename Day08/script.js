let questions = [
    {
        question: "What is 2 + 2?",
        answers: ["3", "4", "5"],
        correct: "4"
    },
    {
        question: "Capital of India?",
        answers: ["Mumbai", "Delhi", "Kolkata"],
        correct: "Delhi"
    },
    {
        question: "Which language runs in browser?",
        answers: ["Python", "Java", "JavaScript"],
        correct: "JavaScript"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    let q = questions[currentQuestion];

    document.getElementById("question").innerText = q.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach(answer => {
        let btn = document.createElement("button");
        btn.innerText = answer;

        btn.onclick = function () {
            if (answer === q.correct) {
                score++;
                alert("Correct ✅");
            } else {
                alert("Wrong ❌");
            }
        };

        answersDiv.appendChild(btn);
    });
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        document.querySelector(".quiz-container").innerHTML =
            `<h2>Your Score: ${score}/${questions.length}</h2>`;
    }
}

loadQuestion();