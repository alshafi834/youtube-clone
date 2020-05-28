import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import "./VideoListItem.css";

const VideoListItem = ({ video, videoSelectHandler }) => {
  return (
    <Grid item xs={12}>
      <Paper className="thumb" onClick={() => videoSelectHandler(video)}>
        <img
          src={video.snippet.thumbnails.medium.url}
          className="thumbImg"
          alt="thumbnail"
        />
        <Typography variant="subtitle2" className="thumbTitle">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default VideoListItem;
