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
  {
    id: 1,
    questionText:  
   "Which function is used to serialize an object into a JSON string in Javascript?",
    options: ["Stringify()", "Parse()", "Convert()", "None of Above"],
  },
  {
    id: 2,
    questionText: "Which object in Javascript doesn’t have a prototype?",
    options: ["Base Object", "All Objects Have a prototype", "None of Above", "Constructor"],
  },
  {
    id: 3,
    questionText: "Which of the following are closures in Javascript?",
    options: ["Variables", "Functions", "Objects", "All of above"],
  },
  {
    id: 4,
    questionText: "What is 200 Status Code?",
    options: ["Successfully Created", "Error", "Bad request", "Unauthorized"],
  },
  {
    id: 5,
    questionText: "What is the meta tag in HTML",
    options: ["Define data", "For Heading", "For wrapping object", "For bold purpose"],
  },
];

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Quiz = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    setShuffledQuestions(shuffleArray([...questionsData]));
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

const Advisor=()=>
  {
    navigate('/advisor')
  }
  const navigate = useNavigate();

  const video = () => {
    navigate('/video');
  };

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
                <input type="radio" name={`question${question.id}`} />
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
            You Score of Quiz is : 3/5 
            <br />
            Click below button for Suggested Advisor and Video Lecture Recommendation!!!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={Advisor}>Advisor</Button>
          <Button onClick={video} autoFocus>
            Video Lecture
          </Button>
          <Button onClick={dash} autoFocus>
            Subject Dashboard
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Quiz;
