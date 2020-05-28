import React, { useState } from "react";
import { Paper, TextField, Grid } from "@material-ui/core";

import "./SearchBar.css";

const SearchBar = ({ handleSearchSubmit }) => {
  const [searchQuery, setSeachQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearchSubmit(searchQuery);
  };

  return (
    <Paper elevation={6} className="search-bar">
      <Grid item xs={3}>
        <img src="../youtube-logo.jpg" alt="Logo" style={{ width: "135px" }} />
      </Grid>
      <Grid item xs={9}>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Search videos..."
            onChange={(e) => {
              setSeachQuery(e.target.value);
            }}
          ></TextField>
        </form>
      </Grid>
    </Paper>
  );
};

export default SearchBar;
