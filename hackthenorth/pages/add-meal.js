import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl, FormHelperText } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Nav from "../components/navbar";

const useStyles = makeStyles((theme) => ({
  form: {
    width: "25ch",
  },
  root: {
    display: "flex",
    justifyContent: "center",
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
            classNames={classes.form}
            required
            id="standard-required"
            label="Required"
          />
        </div>
      </form>
    </>
  );
};

export default AddMeal;
