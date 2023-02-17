import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  blog: {
    height: "auto",
    paddingTop: "100px",
    backgroundColor: "#fff",
  },
  title: {
    color: "#444649",
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
    backgroundColor: "#444649",
  },
  gridCont: {
    marginTop: 100,
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  img: {
    width: "100%",
    height: "200px",
  },
  blogCard: {
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)",
    maxWidth: 320,
    height: "420px",
    transition: "transform 0.2s ease-in",
    cursor: "pointer",
    "&:hover": {
      transform: "translateY(-10px)",
    },
  },
  blogTitle: {
    fontFamily: "Raleway",
    color: "#616161",
    fontWeight: "bold",
    fontSize: "16pt",
    margin: "10px 0",
  },
  date: {
    fontFamily: "open-sans",
    textTransform: "uppercase",
    fontWeight: "500",
    fontSize: "11px",
    color: "#838383",
    margin: "10px 0",
  },
  smallUnderline: {
    width: "28%",
    height: "3px ",
    backgroundColor: "#04c2c9",
    marginTop: "15px",
    marginBottom: "10px",
  },
  blogSub: {
    fontFamily: "open-sans",
    fontWeight: "500",
    fontSize: "17px",
    color: "#838383",
    margin: "10px 0",
  },
}));
