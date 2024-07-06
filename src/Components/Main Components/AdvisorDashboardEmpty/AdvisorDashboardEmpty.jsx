import React, { useState, useRef } from "react";
import "./Dashboard.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { green } from "@mui/material/colors";
import logo from "../../../assets/images/logo.png";
import dashboard from "../../../assets/images/dashboard.png";
import setting from "../../../assets/images/settings.png";
import videos from "../../../assets/images/video.png";
import analytics from "../../../assets/images/calendar.png";
import inbox from "../../../assets/images/inbox.png";
import courses from "../../../assets/images/study.png";
import clock from "../../../assets/images/clock3.png";
import advisor from "../../../assets/images/advisor.png";
import books from "../../../assets/images/books.png";
import { PieChart } from "react-minimal-pie-chart";
import { useNavigate } from "react-router-dom";
import Video from "./Videoes";
import AdvisorSts from "./AdvisorSts";
import Rating from "@mui/material/Rating";

const drawerWidth = 240;

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState("Dashboard");
  const [selectedFile, setSelectedFile] = useState(null);
  const [videoURL, setVideoURL] = useState(null);
  const fileInputRef = useRef(null);

  const icons = [
    dashboard,
    dashboard,
    advisor,
    videos,
    analytics,
    inbox,
    courses,
  ];

  const handleItemClick = (text) => {
    setSelectedItem(text);
  };

  const navigate = useNavigate();
  const navigation = () => {
    navigate("/");
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setVideoURL(URL.createObjectURL(file));
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  return (
    <>
      <div className="maincontainerDashboard">
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar className="toolbarar">
              <div className="navBar">
                <div>
                  <img src={logo} className="dashboardLogo" alt="Logo" />
                </div>
              </div>
              <div>
                <button onClick={navigation} className="buttonLogout">
                  Logout
                </button>
              </div>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            className="drawer"
            sx={{
              width: drawerWidth,
              backgroundColor: green,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: "auto", paddingTop: "30px" }}>
              <List>
                {["Dashboard", "Students", "Videos"].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => handleItemClick(text)}
                      selected={selectedItem === text}
                    >
                      <ListItemIcon>
                        {typeof icons[index] === "string" ? (
                          <img className="icon" src={icons[index]} alt={text} />
                        ) : (
                          React.createElement(icons[index], {
                            className: "icon",
                          })
                        )}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            {selectedItem === "Dashboard" && (
              <div className="major">
                <div className="mainContainerdash">
                  <div className="submainDash">
                    <img src={advisor} className="clockicon" />
                    <h1 className="advisor">Your Rating</h1>
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
                  </div>
                  <div className="submainDash">
                    <img src={books} className="clockicon" />
                    <h1 className="advisor">Your Course</h1>
                    <h1 className="advisor">Javascript</h1>
                    
                  </div>
                  <div className="submainDash">
                    <button onClick={handleUploadClick} className="uploadButton">
                      Upload Video
                    </button>
                  </div>
                </div>
              </div>
            )}
            {selectedItem === "Students" && <AdvisorSts />}
            {selectedItem === "Videos" && (
              <div>
                <Video />
                {videoURL && (
                  <div>
                    <video width="400" controls>
                      <source src={videoURL} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            )}
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Dashboard;
