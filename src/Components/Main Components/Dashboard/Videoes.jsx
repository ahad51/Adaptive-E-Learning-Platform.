
import React from "react";
import "./Video.css";

const Video = () => {
  return (
    <>
    <div className="video-container">
      <video controls>
        <source
        src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm"
        />
        Your browser does not support the video tag.
      </video> <video controls>
        <source
        src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    <div className="video-container">
      <video controls>
        <source
        src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm"
        />
        Your browser does not support the video tag.
      </video> <video controls>
        <source
        src="http://techslides.com/demos/sample-videos/small.webm" type="video/webm"
        />
        Your browser does not support the video tag.
      </video>
    </div>
    </>
  );
};

export default Video;
