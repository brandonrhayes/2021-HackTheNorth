import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { FormControl } from "@material-ui/core";

const AddMeal = () => {
  return (
    <FormControl>
      <FormHelperText id="my-helper-text">
        We'll never share your email.
      </FormHelperText>
    </FormControl>
  );
};

export default AddMeal;
