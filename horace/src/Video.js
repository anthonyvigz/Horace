import React, { useState } from "react";
import "./App.scss";
import YouTube from "react-youtube";
import "./Styling/video.scss";

function Video() {

  const [loading, setLoading] = useState(true);
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.mute();
    event.target.playVideo();
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  };

  const onEnd = (event) => {
    event.target.playVideo();
  };

  const videoOptions = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoPlay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className="video-background">
      <div className="video-foreground">
        <YouTube
          videoId="lQahF_NwKKY"
          opts={videoOptions}
          className="video-iframe"
          onReady={onReady}
          onEnd={onEnd}
          autoPlay
        />
      <div className={loading ? "blackOverlay" : "blackOverlay hide"} >
      </div>
      </div>
    </div>
  );
}

export default Video;
