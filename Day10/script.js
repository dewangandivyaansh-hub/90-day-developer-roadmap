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
let answered = false;

function loadQuestion() {
    answered = false;

    let q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;

    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    q.answers.forEach(answer => {
        let btn = document.createElement("button");
        btn.innerText = answer;

        btn.onclick = function () {
            if (answered) return;

            answered = true;

            let allButtons = document.querySelectorAll("#answers button");

            allButtons.forEach(b => {
                if (b.innerText === q.correct) {
                    b.classList.add("correct");
                } else {
                    b.classList.add("wrong");
                }
                b.disabled = true;
            });

            if (answer === q.correct) {
                score++;
            }
        };

        answersDiv.appendChild(btn);
    });
}

function nextQuestion() {
    if (!answered) {
        alert("Please select an answer first!");
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    let percentage = (score / questions.length) * 100;

    let message = "";

    if (percentage === 100) {
        message = "🔥 Perfect!";
    } else if (percentage >= 70) {
        message = "😎 Great job!";
    } else if (percentage >= 40) {
        message = "🙂 Not bad!";
    } else {
        message = "😅 Keep practicing!";
    }

    document.querySelector(".quiz-container").innerHTML = `
        <h2>Your Score: ${score}/${questions.length}</h2>
        <h3>${percentage}%</h3>
        <p>${message}</p>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

loadQuestion();