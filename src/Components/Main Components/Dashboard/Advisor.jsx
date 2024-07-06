import React, { useState, useEffect } from "react";
import advisor from "../../../assets/images/advisor.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import dp from "../../../assets/images/profile.png";
import "./Dashboard.css";

const Advisor = () => {
  const [value, setValue] = useState(4);
  const [randomAdvisor, setRandomAdvisor] = useState(null);

  // Sample data array containing advisor information
  const advisorData = [
    { id: 1, name: "Test" },
  ];

  // Function to generate random index
  const getRandomIndex = () => {
    return Math.floor(Math.random() * advisorData.length);
  };

  useEffect(() => {
    // Set initial random advisor on component mount
    const randomIndex = getRandomIndex();
    setRandomAdvisor(advisorData[randomIndex]);
  }, []);

  return (
    <div className="mainContainerdash">
      {randomAdvisor && (
        <div className="submainDashAdvisor" key={randomAdvisor.id}>
          <img src={dp} className="clockicon" alt="Advisor" />
          <h1 className="advisor">{randomAdvisor.name}</h1>
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
      )}
    </div>
  );
};

export default Advisor;
