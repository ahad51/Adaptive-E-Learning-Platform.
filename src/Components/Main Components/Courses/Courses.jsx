import React, { useState } from "react";
import { Tabs, Tab, Paper } from "@mui/material";
import webapp from "../../../assets/images/webapp.jpg"
import javascript from "../../../assets/images/js.jpg"
import html from "../../../assets/images/html.png"
import python from "../../../assets/images/python.png"
import fullstack from"../../../assets/images/fullstack.jpeg"
import logo from "../../../assets/images/logo.png"
import { useNavigate } from "react-router-dom";

import "./CoursesStyle.css"

const Courses = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate=useNavigate();
  const logout=()=>
  {
    navigate("/")
  }
  
  const dashboard=()=>
  {
    navigate("/dashboard")
  }

  return (
    <div className="mainContainerCourses">

        <div className="navbarcourses">
            <img src={logo} className="navLogo" />
            <div style={{paddingRight:"40px"}}>
            <button onClick={logout} className="buttonLogout">Logout</button>
            </div>
        </div>

      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab sx={{color:"lightgray"}} label="Courses" />
          <Tab sx={{color:"lightgray"}} label="Enrolled Courses" />
        </Tabs>
      </Paper>
      {/* Content for the selected tab */}
      {value === 0 && <div>
        <div className="majorContainerCourse">
        <div className="mainContainerTabs">
        <div  onClick={dashboard} className="coursesContainer"> 
        <img src={html} className="poster"  />
        <h1 className="greyHead">Html Full Course</h1>
        <h1 className="greyHead">Durationbn: 3Weeks</h1>
        </div>
        <div onClick={dashboard} className="coursesContainer"> 
        <img src={webapp} className="poster"  />
        <h1 className="greyHead"> Web Development Course</h1>
        <h1 className="greyHead">Durationbn: 3Weeks</h1>
        </div>
         <div onClick={dashboard} className="coursesContainer"> 
        <img src={javascript} className="poster"  />
        <h1 className="greyHead">Javascript Full Course</h1>
        <h1 className="greyHead">Durationbn: 3Weeks</h1>
        </div>
            </div>

            <div className="mainContainerTabs">
        <div className="coursesContainer"> 
        <img src={python} className="poster"  />
        <h1 className="greyHead">Full Python Course</h1>
        <h1 className="greyHead">Durationbn: 3Weeks</h1>
        </div>
        <div className="coursesContainer"> 
        <img src={fullstack} className="poster"  />
        <h1 className="greyHead"> Full Stack Course</h1>
        <h1 className="greyHead">Durationbn: 3Weeks</h1>
        </div> <div className="coursesContainer"> 
        <img src={html} className="poster"  />
        <h1 className="greyHead">Html Full Course</h1>
        <h1 className="greyHead">Durationbn: 3Weeks</h1>
        </div>
        
     
            </div>

            
        </div>
        
        
        </div>}
      {value === 1 && <div>Content for Tab 2</div>}
    </div>
  );
};

export default Courses;
