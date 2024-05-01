import React from "react";
import "./questionStyle.css"

const Question=()=>
{
    return(
        <div className="quizQuestionContainer">
        <h2 className="questionText">What is the capital of France?</h2>
        <div className="optionsContainer">
          <label className="option">
            <input type="radio" name="question1" />
            Paris
          </label>
          <label className="option">
            <input type="radio" name="question1" />
            Rome
          </label>
          <label className="option">
            <input type="radio" name="question1" />
            Berlin
          </label>
          <label className="option">
            <input type="radio" name="question1" />
            Madrid
          </label>
        </div>
        <button className="submitBtn">Submit</button>
      </div>
    )
}
export default Question