import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  custom: {
    color: "#00EE00",
    fontWeight: "bold"
  }
});

// react.school/material-ui

export default function TypographyExample() {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <Typography variant="h1">h1</Typography>
        <Typography variant="h2" gutterBottom>
          h2 gutterBottom
        </Typography>
        <Typography variant="h3" align="right">
          h3 align right
        </Typography>
        <Typography variant="h4" align="center">
          h4 align center
        </Typography>
        <Typography variant="h5" color="primary">
          h5 color primary
        </Typography>
        <Typography variant="h6" className={classes.custom}>
          custom color and bold
        </Typography>
        <Typography variant="h6">h6</Typography>
        <Typography variant="subtitle1" display="inline">
          subtitle1 display inline{" "}
        </Typography>
        <Typography variant="subtitle2" display="inline">
          subtitle2 display inline{" "}
        </Typography>
        <Typography variant="body1">body1 (16px)</Typography>
        <Typography variant="body2">body2 (14px)</Typography>
        <Typography variant="button">button text</Typography>
        <Typography variant="caption" display="block">
          line break caption text
        </Typography>
        <Typography variant="overline" display="block">
          overline text
        </Typography>
      </CardContent>
    </Card>
  );
}

//ReactDOM.render(<TypographyExample />, document.querySelector("#app"));
