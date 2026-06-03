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

  function checkAnswer(option) {

    if (
      option ===
      questions[currentQuestion].answer
    ) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  if (
    currentQuestion >= questions.length
  ) {
    return (
      <div>

        <Header />

        <h1>Quiz Finished 🎉</h1>

        <h2>
          Score: {score} / {questions.length}
        </h2>

      </div>
    );
  }

  return (

    <div>

      <Header />

      <h1>🧠 React Quiz App</h1>

      <h2>
        {questions[currentQuestion].question}
      </h2>

      {questions[currentQuestion].options.map(
        (option, index) => (

          <button
            key={index}
            onClick={() =>
              checkAnswer(option)
            }
          >
            {option}
          </button>

        )
      )}

    </div>
  );
}

export default App;