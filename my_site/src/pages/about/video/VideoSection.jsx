import React, { useState } from "react";
import "./VideoSection.css";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="video-section">
      <div className="video-wrapper">
        {showVideo ? (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div className="video-thumbnail" onClick={() => setShowVideo(true)}>
            <img src="/images/frame.png" alt="Video Thumbnail" />
            <div className="play-button">
              <FaPlay size={25} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
