import React, { useState, useEffect } from "react";
import { Tabs, Tab, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import webapp from "../../../assets/images/webapp.jpg";
import javascript from "../../../assets/images/js.jpg";
import logo from "../../../assets/images/logo.png";
import "./CoursesStyle.css";

const initialCourseData = [
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
 
];

const Courses = () => {
  const [value, setValue] = useState(0);
  const [courseData, setCourseData] = useState(initialCourseData);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const savedEnrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses"));
    if (savedEnrolledCourses) {
      setEnrolledCourses(savedEnrolledCourses);
      const remainingCourses = initialCourseData.filter(
        (course) => !savedEnrolledCourses.some((enrolled) => enrolled.id === course.id)
      );
      setCourseData(remainingCourses);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const dashNavigate = () => {
    navigate("/quiz");
  };

  const logout = () => {
    navigate("/");
  };
  //   const clearLocalStorage = () => {
  //   localStorage.clear();
  //   setEnrolledCourses([]);
  //   setCourseData(initialCourseData);
  //   alert("Local storage cleared!");
  // };


  const enrollCourse = (courseId) => {
    const enrolledCourse = courseData.find((course) => course.id === courseId);
    if (enrolledCourse) {
      const newEnrolledCourses = [...enrolledCourses, enrolledCourse];
      setEnrolledCourses(newEnrolledCourses);
      setCourseData(courseData.filter((course) => course.id !== courseId));
      localStorage.setItem("enrolledCourses", JSON.stringify(newEnrolledCourses));
    }
  };

  return (
    <div className="mainContainerCourses">
      <div className="navbarcourses">
        <img src={logo} className="navLogo" alt="Logo" />
        <div style={{ paddingRight: "40px" }}>
          <button onClick={logout} className="buttonLogout">
            Logout
          </button>
          {/* <button onClick={clearLocalStorage} className="buttonClear">
            Clear Local Storage
          </button> */}
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
          <center>
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
          </center>
        </div>
      )}

      {value === 1 && (
        <div className="majorContainerCourse">
          <center>
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
          </center>
        </div>
      )}
    </div>
  );
};

export default Courses;
