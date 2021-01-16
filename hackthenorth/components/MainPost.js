import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    backgroundColor: theme.palette.grey[1000],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: "url(https://source.unsplash.com/featured/?{dish})",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  searchMenu: {
    padding: "0 4rem",
  },
  searchBar: {
    backgroundColor: "white",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.4)",
  },
  mainFeaturedPostContent: {
    display: "flex",
    position: "relative",
    justifyContent: "center",
    padding: theme.spacing(12),
  },
}));

const schools = [
  { title: "University of Waterloo" },
  { title: "Queen's University" },
];

const MainPost = () => {
  const classes = useStyles();
  const defaultProps = {
    options: schools,
    getOptionLabel: (option) => option.title,
  };

  const flatProps = {
    options: schools.map((option) => option.title),
  };

  const [value, setValue] = React.useState(null);
  return (
    <Paper className={classes.mainFeaturedPost}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} alt="background" />}
      <div className={classes.overlay} />

      <Box className={classes.mainFeaturedPostContent}>
        <Typography variant="h2" color="inherit" paragraph>
          Meals near:
        </Typography>
        <Autocomplete
          className={classes.searchMenu}
          {...defaultProps}
          id="select-on-focus"
          style={{ width: 600 }}
          selectOnFocus
          renderInput={(params) => (
            <TextField {...params} label="University" margin="normal" />
          )}
        />
      </Box>
    </Paper>
  );
};

export default MainPost;
