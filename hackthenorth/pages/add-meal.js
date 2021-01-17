import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Nav from "../components/navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const AddMeal = () => {
  const classes = useStyles();
  return (
    <>
      <Nav> </Nav>
      <form className={classes.root} noValidate autoComplete="off">
        <div>
          <TextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
          />
        </div>
      </form>
    </>
  );
};

export default AddMeal;
