import React, { useEffect, useRef } from 'react';
import './App.css';

function VideoBackground() {
    const videoRef = useRef(null);

    useEffect(() => {
        //start playing when it mounts
        videoRef.current.play().catch(error => {
            //handles an error
            console.error('Video playback error:', error);
        });
    }, []);


     return (
    <div className="video-background">
      <video ref={videoRef} className="video" loop muted>
        <source src="Hard-times-video-background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;