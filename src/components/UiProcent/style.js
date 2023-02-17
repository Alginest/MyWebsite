import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  megaBox: {
    width: "600px",
    height: "28px",
    display: "flex",
    marginBottom: "15px",
    [theme.breakpoints.down("lg")]: {
      width: "550px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "340px",
    },
  },
  nameBox: {
    width: "20%",
    backgroundColor: "#04c2c9",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  underBox: {
    width: "70%",
    backgroundColor: "lightgray",
    zIndex: 1,
    height: 28,
  },
  underBoxTwo: {
    width: "60%",
    backgroundColor: "lightgray",
    zIndex: 1,
    height: 28,
  },
  underBoxThree: {
    width: "50%",
    backgroundColor: "lightgray",
    zIndex: 1,
    height: 28,
  },

  underBoxFour: {
    width: "40%",
    backgroundColor: "lightgray",
    zIndex: 1,
    height: 28,
  },
  underBoxFive: {
    width: "30%",
    backgroundColor: "lightgray",
    zIndex: 1,
    height: 28,
  },
  precentBox: {
    width: "100%",
    height: 28,
    backgroundColor: "#00a1a7",
    zIndex: 900,
    animation: `$myEffectUp 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  numberBox: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "10%",
    [theme.breakpoints.down("xs")]: {
      width: "12%",
    },
  },
  numProc: {
    fontFamily: "Raleway",
    fontWeight: "bold",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
  numDoc: {
    fontFamily: "Raleway",
    [theme.breakpoints.down("xs")]: {
      fontSize: 13,
    },
  },
  /* sideProcents */
  jasDoc: {
    width: "100%",
    height: 28,
    backgroundColor: "#00a1a7",
    zIndex: 900,
    animation: `$myEffectUp 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  jasSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "20%",
  },
  muiDoc: {
    width: "100%",
    height: 28,
    backgroundColor: "#00a1a7",
    zIndex: 900,
    animation: `$myEffectUp 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  muiSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "20%",
  },
  npmDoc: {
    width: "100%",
    height: 28,
    backgroundColor: "#00a1a7",
    zIndex: 900,
    animation: `$myEffectUp 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  npmSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "30%",
  },
  psDoc: {
    width: "100%",
    height: 28,
    backgroundColor: "#00a1a7",
    zIndex: 900,
    animation: `$myEffectUp 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  psSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "40%",
  },
  fireDoc: {
    width: "100%",
    height: 28,
    backgroundColor: "#00a1a7",
    zIndex: 900,
    animation: `$myEffectUp 1000ms ${theme.transitions.easing.easeInOut}`,
  },
  fireSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "50%",
  },
  bootDoc: {
    width: "20%",
    backgroundColor: "#00a1a7",
  },
  bootSm: {
    backgroundColor: "lightgray",
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "10px",
    alignItems: "center",
    width: "60%",
  },
  "@keyframes myEffectUp": {
    "0%": {
      width: 0,
    },
    "100%": {
      width: "100%",
    },
  },
}));
