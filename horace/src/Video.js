import React from "react";
import "./App.scss";
import YouTube from "react-youtube";
import "./Styling/video.scss";

function Video() {
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    // event.target.mute();
  };

  const onEnd = (event) => {
    event.target.playVideo();
  };

  const videoOptions = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
    },
  };

  return (
    <div className="video-background">
      <div className="video-foreground">
        <YouTube
          videoId="9_UOh5lBT3U"
          opts={videoOptions}
          className="video-iframe"
          onReady={onReady}
          onEnd={onEnd}
        />
      </div>
    </div>
  );
}

export default Video;
