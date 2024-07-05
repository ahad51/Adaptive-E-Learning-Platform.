
import React from "react";
import "./Video.css";
import ReactPlayer from 'react-player/youtube';
import video from "../../../assets/videoes/sample.mp4"
import video2 from "../../../assets/videoes/sample2.mp4"

const Video = () => {
  return (
    <>
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
    <div className="yt-video">
      <h1>My YouTube Video</h1>
      <ReactPlayer url='https://www.youtube.com/watch?v=7inhRWxQMFk' />
    </div>
    </>
  );
};

export default Video;
