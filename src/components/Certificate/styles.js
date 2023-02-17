import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  cetSec: {
    backgroundColor: "#f5f5f5",
    marginTop: 100,
    paddingTop: 100,
    paddingBottom: 100,
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
  bigCetBox: {
    width: "100%",
    justifyContent: "space-between",
    display: "flex",
    marginTop: 100,
    flexWrap: "wrap",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  cetImgBox: {
    width: 300,
    height: 500,
    margin: "30px 30px",
    boxShadow: "0 3px 10px rgb(0 0 0 / 50%)",
    background: "white",
  },
  cetImages: {
    width: "100%",
    height: "auto",
  },
  /*same repeat */
  img: {
    width: "100%",
    height: "250px",
  },
  blogCard: {
    boxShadow: "0 3px 10px rgb(0 0 0 / 0.5)",
    maxWidth: 320,
    height: "550px",
    margin: "30px",
    background: "white",
  },
  blogTitle: {
    fontFamily: "Raleway",
    color: "#616161",
    fontWeight: "bold",
    fontSize: "16pt",
    margin: "10px 0",
  },
  blogTitleTwo: {
    fontFamily: "Raleway",
    color: "#616161",
    fontWeight: "bold",
    fontSize: "16pt",
    marginTop: "10px",
    marginBottom: "35px",
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
