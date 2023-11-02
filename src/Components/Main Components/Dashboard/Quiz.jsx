import React from "react";
import "./Video.css"
import clock from "../../../assets/images/quiz1.png";
import quiz from "../../../assets/images/quiz4.png";
import loading from "../../../assets/images/quiz3.png";
import not from "../../../assets/images/due.png";


const Quiz=()=>
{
    return(
        <>
        <div className="mainContainerQuiz">
            <div className="firstContainer">
           <div className="submainDashVideo">
           <h1 className="advisorQuiz">All Quizes</h1>
                    <img src={quiz} className="clockicon2" />
                    <button className="quizProgress">View</button>
                  </div>
                  <div className="submainDashVideo">
                  <h1 className="advisorQuiz">Due Quizes</h1>
                    <img src={not} className="clockicon2" />
                    <button className="quizProgress">View</button>

                  </div>        
                  </div>
                  <div className="firstContainer">
           <div className="submainDashVideo">
           <h1 className="advisorQuiz">In Progress Quizes</h1>
                    <img src={loading} className="clockicon2" />
                    <button className="quizProgress">View</button>

                  </div>
                  <div className="submainDashVideo">
           <h1 className="advisorQuiz">Completed Quizes</h1>
                    <img src={clock} className="clockicon2" />
                    <button className="quizProgress">View</button>

                  </div>
                  
                  </div>
                  
                  </div>
        </>
    )
}
export default Quiz;