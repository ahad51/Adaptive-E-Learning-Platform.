import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";
import "./Quiz.css";

const questionsData = [
  { id: 1, questionText: "Which function is used to serialize an object into a JSON string in Javascript?", options: ["Stringify()", "Parse()", "Convert()", "None of Above"], correctAnswer: "Stringify()" },
  { id: 2, questionText: "Which object in Javascript doesn’t have a prototype?", options: ["Base Object", "All Objects Have a prototype", "None of Above", "Constructor"], correctAnswer: "None of Above" },
  { id: 3, questionText: "Which of the following are closures in Javascript?", options: ["Variables", "Functions", "Objects", "All of above"], correctAnswer: "All of above" },
  { id: 4, questionText: "What is 200 Status Code?", options: ["Successfully Created", "Error", "Bad request", "Unauthorized"], correctAnswer: "Successfully Created" },
  { id: 5, questionText: "What is the meta tag in HTML", options: ["Define data", "For Heading", "For wrapping object", "For bold purpose"], correctAnswer: "Define data" },
  { id: 6, questionText: "What is the purpose of the 'this' keyword in JavaScript?", options: ["Refers to current object", "Refers to global object", "Refers to parent object", "None of the above"], correctAnswer: "Refers to current object" },
  { id: 7, questionText: "Which method removes the last element from an array and returns that element?", options: ["pop()", "push()", "splice()", "shift()"], correctAnswer: "pop()" },
  { id: 8, questionText: "What will the following code output: console.log(typeof null)?", options: ["object", "null", "undefined", "string"], correctAnswer: "object" },
  { id: 9, questionText: "Which of the following is not a reserved word in JavaScript?", options: ["interface", "throws", "program", "short"], correctAnswer: "program" },
  { id: 10, questionText: "Which built-in method combines the text of two strings and returns a new string?", options: ["append()", "concat()", "attach()", "None of the above"], correctAnswer: "concat()" },
  { id: 11, questionText: "Which JavaScript method is used to access an HTML element by id?", options: ["getElementById()", "getElement(id)", "getElementById(id)", "None of the above"], correctAnswer: "getElementById()" },
  { id: 12, questionText: "Which operator is used to assign a value to a variable?", options: ["*", "=", "-", "+"], correctAnswer: "=" },
  { id: 13, questionText: "Which event occurs when the user clicks on an HTML element?", options: ["onchange", "onclick", "onmouseclick", "onmouseover"], correctAnswer: "onclick" },
  { id: 14, questionText: "How do you declare a JavaScript variable?", options: ["var carName;", "variable carName;", "v carName;", "None of the above"], correctAnswer: "var carName;" },
  { id: 15, questionText: "Which method removes the first element from an array and returns that element?", options: ["shift()", "pop()", "splice()", "split()"], correctAnswer: "shift()" },
  { id: 16, questionText: "How can you add a comment in JavaScript?", options: ["<!--This is a comment-->", "'This is a comment", "//This is a comment", "/*This is a comment*/"], correctAnswer: "//This is a comment" },
  { id: 17, questionText: "Which method returns the character at a specified index?", options: ["charAt()", "getCharAt()", "characterAt()", "None of the above"], correctAnswer: "charAt()" },
  { id: 18, questionText: "Which method returns the length of a string?", options: [".length", ".size", ".index", ".count"], correctAnswer: ".length" },
  { id: 19, questionText: "How can you convert a string to a number in JavaScript?", options: ["Number()", "parseInt()", "parseFloat()", "All of the above"], correctAnswer: "All of the above" },
  { id: 20, questionText: "Which method sorts the elements of an array?", options: ["order()", "sort()", "arrange()", "None of the above"], correctAnswer: "sort()" },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5).slice(0, 10);
};

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState({});
  const [score, setScore] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questionsData]));
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers({
      ...userAnswers,
      [questionId]: answer
    });
  };

  const handleClickOpen = () => {
    let newScore = 0;
    shuffledQuestions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setOpen(true);
  };

  const navigate = useNavigate();


  const dash = () => {
    navigate('/dashboard');
  };

  return (
    <div className="backgroundQuiz">
      <h1 className="quizHeading">Quiz</h1>
      {shuffledQuestions.map((question) => (
        <div key={question.id} className="quizQuestionContainer">
          <h2 className="questionText">{question.questionText}</h2>
          <div className="optionsContainer">
            {question.options.map((option, index) => (
              <label key={index} className="option">
                <input 
                  type="radio" 
                  name={`question${question.id}`} 
                  value={option}
                  onChange={() => handleAnswerChange(question.id, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <Button sx={{ backgroundColor: "yellow", color: "black" }} variant="outlined" onClick={handleClickOpen}>
        Check Result
      </Button>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Quiz Result"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your Score of Quiz is: {score}/{shuffledQuestions.length} 
            <br />
            The Platform has Adapted to your needs. click below to start course
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={dash} autoFocus>
            Subject Dashboard
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Quiz;
