import { Box, Container, TextField, Typography } from "@material-ui/core";
import React, { useRef } from "react";
import useStyles from "./styles";
//email
import emailjs from "@emailjs/browser";

const Contact = () => {
  const classes = useStyles();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_EMAILJS_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email-sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Box className={classes.contSec} id="contact">
      <Container className={classes.conCont}>
        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {/* Title */}
          <Typography align="center" className={classes.title}>
            Contact
          </Typography>
          <Box className={classes.center}>
            <div className={classes.underline} />
          </Box>
        </div>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Typography
            align="center"
            style={{ marginTop: 30, color: "lightblue" }}
          >
            Have a question or want to work together?
          </Typography>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Box className={classes.formCont}>
            <form className={classes.myForm} ref={form} onSubmit={sendEmail}>
              <TextField
                label="Name"
                name="user__name"
                variant="outlined"
                id="standard"
                className={classes.input}
                required
              />
              <TextField
                label="Enter Email"
                variant="outlined"
                name="user_email"
                id="standard"
                className={classes.input}
                required
              />

              <TextField
                id="outlined-multiline-static"
                multiline
                minRows={6}
                defaultValue={"Message"}
                variant="outlined"
                className={classes.textArea}
                name="message"
                required
              />
              <button type="submit" value="Send" className={classes.cstBtn}>
                Send Message
              </button>
            </form>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default Contact;
