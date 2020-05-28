import React from "react";
import { Paper, Typography } from "@material-ui/core";

import "./VideoPlayer.css";

const VideoPlayer = ({ selectedVideo }) => {
  let vdoUrl;
  if (selectedVideo) {
    vdoUrl = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
  }
  return (
    <>
      {selectedVideo ? (
        <div>
          <Paper elevation={6} className="iframe">
            <iframe
              src={vdoUrl}
              frameBorder="0"
              height="350px"
              width="100%"
              title="Video player"
            ></iframe>
          </Paper>
          <Paper elevation={6} className="video-title">
            <Typography variant="h5">
              {selectedVideo.snippet.title} -{" "}
              {selectedVideo.snippet.channelTitle}
            </Typography>
            <Typography variant="subtitle1">
              {selectedVideo.snippet.channelTitle}
            </Typography>
            <Typography variant="subtitle2">
              {selectedVideo.snippet.description}
            </Typography>
          </Paper>
        </div>
      ) : null}
    </>
  );
};

export default VideoPlayer;
