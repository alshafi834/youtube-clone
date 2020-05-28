import React from "react";
import VideoListItem from "./VideoListItem";
import { Grid } from "@material-ui/core";

const VideoList = ({ videos, videoSelectHandler }) => {
  const otherVideos = videos.map((video, index) => (
    <VideoListItem
      key={index}
      video={video}
      videoSelectHandler={videoSelectHandler}
    />
  ));
  return (
    <Grid container spacing={5}>
      {otherVideos}
    </Grid>
  );
};

export default VideoList;
