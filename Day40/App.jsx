import { useState } from "react";
import "./App.css";
import Header from "./Header";

function App() {

  const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which language is used for styling web pages?",
      options: [
        "HTML",
        "CSS",
        "Python"
      ],
      answer: "CSS"
    },
    {
      question: "Which library is used for React?",
      options: [
        "React",
        "Bootstrap",
        "Django"
      ],
      answer: "React"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [highScore, setHighScore] = useState(0);

  function checkAnswer(option) {

    let newScore = score;

    if (option === questions[currentQuestion].answer) {

      newScore = score + 1;
      setScore(newScore);

      setFeedback("✅ Correct!");

    } else {

      setFeedback("❌ Incorrect!");

    }

    setTimeout(() => {

      setFeedback("");
      setCurrentQuestion(currentQuestion + 1);

    }, 1000);
  }

  function restartQuiz() {

    if (score > highScore) {

      setHighScore(score);

    }

    setCurrentQuestion(0);
    setScore(0);
    setFeedback("");

  }

  if (currentQuestion >= questions.length) {

    const percentage =
      Math.round((score / questions.length) * 100);

    return (

      <div>

        <Header />

        <h1>🏆 Quiz Finished</h1>

        <h2>
          Score: {score}/{questions.length}
        </h2>

        <h2>
          Percentage: {percentage}%
        </h2>

        <h3>
          High Score: {Math.max(score, highScore)}
        </h3>

        <button onClick={restartQuiz}>
          Restart Quiz
        </button>

      </div>

    );
  }

  return (

    <div>

      <Header />

      <h1>🧠 React Quiz App</h1>

      <h3>
        Question {currentQuestion + 1}
        / {questions.length}
      </h3>

      <h2>
        {questions[currentQuestion].question}
      </h2>

      {questions[currentQuestion].options.map(
        (option, index) => (

          <button
            key={index}
            onClick={() => checkAnswer(option)}
          >
            {option}
          </button>

        )
      )}

      <h3>{feedback}</h3>

    </div>

  );
}

export default App;