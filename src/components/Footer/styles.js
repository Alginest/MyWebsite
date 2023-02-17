import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  footer: {
    width: "100%",
    height: 230,
    background: "#1b242f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "relative",
  },
  arrowUp: {
    position: "absolute",
    top: "-20px",
    padding: "7px 2px",
    borderRadius: 2,
    backgroundColor: "#e31b6d",
    transition: "transform 0.3s ease-in",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-5%)",
    },
  },
  icoUp: {
    color: "white",
    fontSize: 35,
    padding: 0,
  },
  socialLinks: {
    width: "300px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  linkTo: {
    textDecoration: "none",
    color: "white",
  },
  icoBg: {
    backgroundColor: "#262f38",
    padding: "15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
    overflow: "hidden",
    "&:hover": {
      backgroundColor: "#e31b6d",
      transform: "scale(0.9)",
      "& $linkIco": {
        animation: `$myEffect 500ms ${theme.transitions.easing.easeInOut}`,
      },
    },
  },

  linkIco: {
    fontSize: 25,
  },
  name: {
    fontSize: 13,
    fontFamily: "Roboto",
    margin: "30px 0",
    color: "#8f9aa7",
  },
  span: {
    color: "#e31b6d",
    fontSize: 13,
    marginLeft: 5,
  },
  "@keyframes myEffect": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
