
import React from "react";
import video from "../../assets/videoes/sample.mp4"
import video2 from "../../assets/videoes/sample2.mp4"
import "./Video.css"
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Video = () => {
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/");
  };
  const navigationAdvisor = () => {
    navigate("/advisor");
  };
  return (
    <>
          <AppBar
            // position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
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
    <div className="mainContainerVideo">
      <div style={{paddingTop:"10px"}}>
    <button onClick={navigationAdvisor} className="buttonLogout">
      Advisor
      </button>
      </div>
    <div className="video-container">

      <video controls>
        <source
        src={video} type="video/webm"
        />
        Your browser does not support the video tag.
      </video> <video controls>
        <source
        src={video2} type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    </div>


    </div>
    </>
  );
};

export default Video;
