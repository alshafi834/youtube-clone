import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";

import youtube from "./api/youtube-api";
import "./App.css";
import SearchBar from "./components/SearchBar";
import VideoPlayer from "./components/VideoPlayer";
import VideoList from "./components/VideoList";

import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const shafi = process.env.REACT_APP_YOUTUBE_API_KEY;

  const handleSearchSubmit = async (query) => {
    const response = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: shafi,
        q: query,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  const videoSelectHandler = (video) => {
    console.log("something");
    setSelectedVideo(video);
  };

  useEffect(() => {
    handleSearchSubmit("javascript");
  }, []);

  return (
    <Grid container justify="center" spacing={10} className="App">
      <Grid item xs={10}>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <SearchBar handleSearchSubmit={handleSearchSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoPlayer selectedVideo={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList
              videos={videos}
              videoSelectHandler={videoSelectHandler}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
