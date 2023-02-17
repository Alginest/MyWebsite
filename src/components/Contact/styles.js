import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  contSec: {
    backgroundColor: "rgb(37, 41, 52)",
    paddingTop: 100,
    paddingBottom: 100,
  },

  title: {
    color: "white",
    textTransform: "uppercase",
    fontFamily: "Raleway",
    fontSize: 40,
    fontWeight: "bold",
  },
  center: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  underline: {
    width: "80px",
    height: 4,
    backgroundColor: "white",
  },
  /* form */
  formCont: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    marginTop: 50,
  },
  myForm: {
    width: "500px",
    minWidth: 500,
    display: "flex",
    flexDirection: "column",
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "330px",
      minWidth: 330,
    },
  },
  input: {
    margin: "5px 0",
    color: "white",
    background: "#1e242c",
    "&:-internal-autofill-selected": {
      backgroundColor: "none !important",
    },
    "& .MuiFormLabel-root": {
      color: "white",
      fontSize: 14,
      lineHeight: 0,
    },
    "& .MuiInputBase-root": {
      color: "white",
      height: 38,
    },
  },
  textArea: {
    margin: "5px 0",
    marginBottom: 20,
    background: "#1e242c",
    "& .MuiInputBase-root": {
      color: "white",
    },
  },
  cstBtn: {
    color: "white",
    backgroundColor: "rgb(37, 41, 52)",
    border: "2px solid white",
    padding: "8px 25px",
    marginTop: "20px ",
    fontFamily: "Raleway",
    textTransform: "capitalize",
    fontSize: 20,
    transition: "background 0.3s ease-in-out",
    cursor: "pointer",
    "&:hover": {
      background: "#e63768",
    },
  },
}));
