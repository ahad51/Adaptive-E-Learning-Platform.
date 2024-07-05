
import React, { useState } from "react";
import "./Video.css";
import ReactPlayer from 'react-player/youtube';

const Video = () => {
  const [uploadedVideo, updateVideo] = useState("");
  return (
    <>
    <div className="video-container">      
      <div className="yt-video">
        <ReactPlayer 
        className="reactPlayer"
        width='100%'
        height="100%"
        url={uploadedVideo}
        controls = {true}
        />
      </div>
    </div>
    </>
  );
};

export default Video;
