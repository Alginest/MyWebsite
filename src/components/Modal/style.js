import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    height: "700px",
    width: "714px",
    boxShadow: theme.shadows[5],
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      width: "340px",
      minWidth: 340,
      height: "600px",
    },
  },
  imgsBox: {
    width: "100%",
    height: "60%",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "50%",
    },
  },
  imgs: {
    width: "714px",
    height: "420px",
    borderBottom: "solid 3px rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("xs")]: {
      width: 340,
      height: 300,
      objectFit: "cover",
    },
  },
  beforeIcon: {
    position: "absolute",
    left: "0px",
    bottom: "30px",
    background: "rgba(0, 0, 0, 0.5)",
    width: "65px",
    height: "55px",
    color: "white",
    cursor: "pointer",
  },
  afterIcon: {
    position: "absolute",
    right: "0px",
    bottom: "30px",
    background: "rgba(0, 0, 0, 0.5)",
    width: "65px",
    height: "55px",
    fontSize: "16px",
    color: "white",
    cursor: "pointer",
  },
  webTitle: {
    fontSize: "22pt",
    marginTop: 20,
    fontFamily: "Raleway-bold",
    fontWeight: "900",
  },
  webSubTitle: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
    color: " #c0c0c0",
    display: "block",
    fontFamily: "Raleway-bold",
    fontWeight: 900,
    paddingBottom: 15,
    textTransform: "uppercase",
  },
  webAbout: {
    marginTop: 15,
    fontSize: 14,
    fontWeight: 300,
    letterSpacing: 0.5,
  },
  btnBox: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 40,
  },
  btnMore: {
    width: 150,
    height: 40,
    backgroundColor: "#e63768",
    color: "white",
    fontFamily: "Raleway",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "white",
      color: "#e63768",
    },
  },
  btnIcon: {
    fontSize: 16,
    marginRight: 15,
  },
  leavingIcon: {
    color: "gray",
    fontSize: 30,
    cursor: "pointer",
  },
  gitHubIco: {
    display: "flex",
    justifyContent: "space-between",
  },
  gitHubIcon: {
    fontSize: 30,
    cursor: "pointer",
    marginLeft: 5,
  },
  gitLink: {
    marginTop: "30px",
    padding: "5px",
    borderRadius: "20px",
    color: "black",
    fontFamily: "Raleway",
    fontSize: 20,

    display: "flex",
    alignItems: "center",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "#e63768",
      textDecoration: "none",
    },
  },
}));
