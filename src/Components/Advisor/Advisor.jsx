import React, { useState } from "react";
import advisor from "../../assets/images/advisor.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import dp from "../../assets/images/profile.png";
import { useNavigate } from "react-router-dom";

const Advisor = () => {
  const [value, setValue] = useState(4);
  const navigate=useNavigate();

  // Sample data array containing advisor information
  const advisorData = [
    { id: 1, name: "Ahad" },
    { id: 2, name: "Faizan" },
    { id: 3, name: "Umair" },
    { id: 3, name: "Shalina" },
    { id: 3, name: "Jane" },
    { id: 1, name: "Ahad" },

  ];
  const navigation=()=>
    {
      navigate('/dashboard')
    }

  return (
    <>
    <div className="mainContainerdashh">
    <h1 className="quizHeading">Advisor's List</h1>
    <button onClick={navigation} className="advisorButton">Dashboard</button>

    <div className="mainContainerdash">
      {advisorData.map((advisor) => (
        <div className="submainDashAdvisor" key={advisor.id}>
          <img src={dp} className="clockicon" />
          <h1 className="advisor">{advisor.name}</h1>
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <button className="advisorButton">Connect</button>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default Advisor;
