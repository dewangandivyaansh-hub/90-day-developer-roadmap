import "./App.css";
import Header from "./Header";
import QuestionCard from "./QuestionCard";

function App() {

  const questionData = {

    question:
      "What is the capital of France?",

    options: [
      "London",
      "Paris",
      "Rome",
      "Berlin"
    ],

    answer: "Paris"

  };

  return (

    <div>

      <Header />

      <QuestionCard
        question={
          questionData.question
        }
        options={
          questionData.options
        }
        answer={
          questionData.answer
        }
      />

    </div>

  );

}

export default App;