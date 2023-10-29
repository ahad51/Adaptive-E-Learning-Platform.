import React, { useState } from "react";
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

const drawerWidth = 240;

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard"); // Initialize with 'Dashboard'

  const icons = [
    dashboard,
    dashboard,
    setting,
    videos,
    analytics,
    inbox,
    courses,
  ];

  // Function to handle item click
  const handleItemClick = (text) => {
    setSelectedItem(text);
  };
  const navigate=useNavigate()
  const navigation=()=>
  {
  navigate("/")
  }

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
                <button onClick={navigation} className="buttonLogout">Logout</button>
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
            <Box sx={{ overflow: "auto" }}>
              <List>
                {[
                  "Dashboard",
                  "Dashboard",
                  "Settings",
                  "Videos",
                  "Schedule",
                  "Inbox",
                  "Courses",
                ].map((text, index) => (
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
                    <h1 className="advisor">Advisors</h1>
                    <h1 className="advisor">5</h1>
                  </div>
                  <div className="submainDash">
                    <img src={books} className="clockicon" />
                    <h1 className="advisor">Active Cources</h1>
                    <h1 className="advisor">15</h1>
                  </div>{" "}
                  <div className="submainDash">
                    <img src={clock} className="clockicon" />
                    <h1 className="advisor">Time Spend</h1>
                    <h1 className="advisor">6:00:54</h1>
                  </div>
                </div>
                <div className="submainsecondash">
                  <div className="donut">
                    {" "}
                    <div className="App">
                      <h1 className="advisor">Course Progress</h1>
                      <PieChart
                        data={[
                          { title: "Onesdsad", value: 2, color: "blue" },
                          { title: "Onesdsad", value: 2, color: "yellow" },
                          { title: "Two", value: 4, color: "green" },
                          { title: "Three", value: 2, color: "pink" },
                        ]}
                        style={{ width: "250px", height: "250px" }}
                      />
                      ;
                    </div>
                  </div>
                  <div className="table">
                    <h1 className="advisor2">Course</h1>
                    <h3 className="advisor2">Course Name : Python</h3>
                    <hr className="hr" />
                    <h3 className="advisor2">Course Name : Python</h3>
                    <hr className="hr" />
                    <h3 className="advisor2">Advisor Name : Umair Muneer</h3>
                    <hr className="hr" />
                    <h3 className="advisor2">Course Progress : Complete</h3>
                    <hr className="hr" />
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Box>
      </div>
    </>
  );
};

export default Dashboard;
