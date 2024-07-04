import React from "react";

const questionsData = [
  {
    id: 1,
    questionText: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
  },
  {
    id: 2,
    questionText: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
  {
    id: 2,
    questionText: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
  {
    id: 2,
    questionText: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
  {
    id: 2,
    questionText: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
  {
    id: 2,
    questionText: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
  {
    id: 2,
    questionText: "What is the largest mammal?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
  },
];

const Quiz = () => {
  return (
    <div>
      <h1 className="quizHeading">Quiz</h1>
      {questionsData.map((question) => (
        <div key={question.id} className="quizQuestionContainer">
          <h2 className="questionText">{question.questionText}</h2>
          <div className="optionsContainer">
            {question.options.map((option, index) => (
              <label key={index} className="option">
                <input type="radio" name={`question${question.id}`} />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
          <button className="submitBtn">Submit</button>

    </div>
  );
};

export default Quiz;
