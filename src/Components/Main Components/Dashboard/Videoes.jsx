import React, { useState, useEffect } from "react";
import "./Video.css";
import ReactPlayer from 'react-player/youtube';

const Video = () => {
  const [randomVideoUrl, setRandomVideoUrl] = useState('');

  // Sample array containing video URLs
  const videoUrls = [
    'https://www.youtube.com/watch?v=W6NZfCO5SIk&t=2s&pp=ygUKamF2YXNjcmlwdA%3D%3D',
    'https://www.youtube.com/watch?v=lkIFF4maKMU&pp=ygUKamF2YXNjcmlwdA%3D%3D',
    'https://www.youtube.com/watch?v=PkZNo7MFNFg&pp=ygUKamF2YXNjcmlwdA%3D%3D',
    'https://www.youtube.com/watch?v=E3XxeE7NF30&pp=ygUKamF2YXNjcmlwdA%3D%3D',
  ];

  // Function to generate random index
  const getRandomIndex = () => {
    return Math.floor(Math.random() * videoUrls.length);
  };

  useEffect(() => {
    // Set random video URL on component mount
    const randomIndex = getRandomIndex();
    setRandomVideoUrl(videoUrls[randomIndex]);
  }, []);

  return (
    <>
      <div className="video-container">      
        <div className="yt-video">
          <ReactPlayer 
            className="reactPlayer"
            width='100%'
            height="100%"
            url={randomVideoUrl}
            controls={true}
          />
        </div>
      </div>
    </>
  );
};

export default Video;
