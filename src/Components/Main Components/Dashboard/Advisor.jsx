import React, { useState } from "react";
import advisor from "../../../assets/images/advisor.png";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import dp from "../../../assets/images/profile.png";
import "./Dashboard.css";

const Advisor = () => {
  const [value, setValue] = useState(4);

  // Sample data array containing advisor information
  const advisorData = [
    { id: 1, name: "Test" },

  ];

  return (
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
  );
};

export default Advisor;
