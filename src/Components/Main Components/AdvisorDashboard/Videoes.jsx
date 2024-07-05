
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
        url='https://www.youtube.com/watch?v=W6NZfCO5SIk&t=2s&pp=ygUKamF2YXNjcmlwdA%3D%3D'
        controls = {true}
        />
      </div>
      <div className="yt-video">
        <ReactPlayer 
        className="reactPlayer"
        width='100%'
        height="100%"
        url='https://www.youtube.com/watch?v=lkIFF4maKMU&pp=ygUKamF2YXNjcmlwdA%3D%3D'
        controls = {true}
        />
      </div>
      <div className="yt-video">
        <ReactPlayer 
        className="reactPlayer"
        width='100%'
        height="100%"
        url='https://www.youtube.com/watch?v=PkZNo7MFNFg&pp=ygUKamF2YXNjcmlwdA%3D%3D'
        controls = {true}
        />
      </div>
      <div className="yt-video">
        <ReactPlayer 
        className="reactPlayer"
        width='100%'
        height="100%"
        url='https://www.youtube.com/watch?v=E3XxeE7NF30&pp=ygUKamF2YXNjcmlwdA%3D%3D'
        controls = {true}
        />
      </div>
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
