// Courses.js
import React, { useState } from "react";
import { Tabs, Tab, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import webapp from "../../../assets/images/webapp.jpg";
import javascript from "../../../assets/images/js.jpg";
import html from "../../../assets/images/html.png";
import python from "../../../assets/images/python.png";
import fullstack from "../../../assets/images/fullstack.jpeg";
import logo from "../../../assets/images/logo.png";
import "./CoursesStyle.css";

const courseData = [
  {
    id: 1,
    image: webapp,
    title: "Html Full Course",
    duration: "Duration: 3 Weeks",
  },
  {
    id: 2,
    image: javascript,
    title: "Web Development Course",
    duration: "Duration: 3 Weeks",
  },
  {
    id: 3,
    image: html,
    title: "Javascript Full Course",
    duration: "Duration: 3 Weeks",
  },
  {
    id: 4,
    image: python,
    title: "Full Python Course",
    duration: "Duration: 3 Weeks",
  },
  {
    id: 5,
    image: fullstack,
    title: "Full Stack Course",
    duration: "Duration: 3 Weeks",
  },
];

const Courses = () => {
  const [value, setValue] = useState(0);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dashNavigate = () => {
    navigate("/dashboard");
  };
  const logout = () => {
    navigate("/");
  };

  const dashboard = () => {
    navigate("/dashboard");
  };

  const enrollCourse = (courseId) => {
    const enrolledCourse = courseData.find((course) => course.id === courseId);
    setEnrolledCourses([...enrolledCourses, enrolledCourse]);
  };

  return (
    <div className="mainContainerCourses">
      <div className="navbarcourses">
        <img src={logo} className="navLogo" alt="Logo" />
        <div style={{ paddingRight: "40px" }}>
          <button onClick={logout} className="buttonLogout">
            Logout
          </button>
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
          <Tab sx={{ color: "lightgray" }} label="Courses" />
          <Tab sx={{ color: "lightgray" }} label="Enrolled Courses" />
        </Tabs>
      </Paper>

      {value === 0 && (
        <div className="majorContainerCourse">
          <div className="mainContainerTabs">
            {courseData.map((course) => (
              <div key={course.id} className="coursesContainer">
                <img
                  src={course.image}
                  className="poster"
                  alt={`Course-${course.id}`}
                />

                <h1 className="greyHead">{course.title}</h1>
                <button
                  className="enrollButton"
                  onClick={() => enrollCourse(course.id)}
                >
                  Enroll
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {value === 1 && (
        <div onClick={dashNavigate} className="mainContainerTabs">
          {enrolledCourses.map((course) => (
            <div key={course.id} className="coursesContainer">
              <img
                src={course.image}
                className="poster"
                alt={`EnrolledCourse-${course.id}`}
              />
              <h1 className="greyHead">{course.title}</h1>
              <p className="duration">{course.duration}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
