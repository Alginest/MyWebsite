import { makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  svg: {
    marginBottom: "-8px",
    [theme.breakpoints.down("lg")]: {
      marginBottom: "-7px",
    },
    [theme.breakpoints.down("md")]: {
      marginBottom: "-6px",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "-5px",
    },
  },
}));
const BottomSvg = () => {
  const classes = useStyles();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className={classes.svg}
    >
      <path
        fill="#252934"
        fillOpacity="1"
        d="M0,128L720,224L1440,128L1440,320L720,320L0,320Z"
      ></path>
    </svg>
  );
};

export default BottomSvg;
