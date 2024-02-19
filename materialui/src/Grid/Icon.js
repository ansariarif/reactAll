import React from "react";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SmileIcon from "@material-ui/icons/Mood";

// Free Material-UI Template
// https://react.school/material-ui/templates

function sayHi() {
  console.log("Hello!");
}

const CustomColorIconButton = withStyles({
  root: {
    color: "#ff8833"
  }
})(IconButton);

function Icon() {
  return (
    <div>
      <Typography variant="h5">Default IconButton</Typography>
      <IconButton onClick={sayHi}>
        <SmileIcon />
      </IconButton>
      <Typography variant="h5">Primary Color</Typography>
      <IconButton color="primary" onClick={sayHi}>
        <SmileIcon />
      </IconButton>
      <Typography variant="h5">Custom Color</Typography>
      <CustomColorIconButton onClick={sayHi}>
        <SmileIcon />
      </CustomColorIconButton>
      <Typography variant="h5">Small size</Typography>
      <IconButton size="small" onClick={sayHi}>
        <SmileIcon />
      </IconButton>
      <Typography variant="h5">Disabled</Typography>
      <IconButton disabled onClick={sayHi}>
        <SmileIcon />
      </IconButton>
      <Typography variant="h5">Edge start</Typography>
      <IconButton edge="start" onClick={sayHi}>
        <SmileIcon />
      </IconButton>
      <Typography variant="h5">Icon inside Button with label</Typography>
      <Button variant="contained" startIcon={<SmileIcon />}>
        Button
      </Button>
    </div>
  );
}

export default Icon;

//ReactDOM.render(<App />, document.querySelector("#app"));
