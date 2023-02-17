import { Box, Container, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import cetOne from "../../img/cetone.png";
import cetTwo from "../../img/cettwo.png";
import cetThree from "../../img/cetthree.png";
const Certificate = () => {
  const classes = useStyles();
  return (
    <Box className={classes.cetSec} id="certificate">
      <Container className={classes.cetCont}>
        <div
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          {/* Title */}
          <Typography align="center" className={classes.title}>
            Certifications
          </Typography>
          <Box className={classes.center}>
            <div className={classes.underline} />
          </Box>
        </div>
        <Box className={classes.bigCetBox}>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="300"
          >
            {/* 1*/}
            <Box className={classes.blogCard}>
              <img src={cetOne} alt="coders block" className={classes.img} />
              <Container>
                <Typography variant="h5" className={classes.blogTitle}>
                  JavaScript Algorithms and Data Structure Certificate
                </Typography>
                <Typography className={classes.date}>
                  december 27, 2020
                </Typography>
                <Box className={classes.smallUnderline}></Box>
                <p className={classes.blogSub}>
                  Been using Javascript since 2020, i learned algorithms through
                  <br />
                  <Link href="https://www.codewars.com/users/Alginest">
                    CodeWars&nbsp;
                  </Link>
                  ,&nbsp;
                  <Link href="https://www.freecodecamp.org/">
                    FreeCodeCamp&nbsp;
                  </Link>
                  for the certificate and learning when making websites, fun
                  games and apps.
                </p>
              </Container>
            </Box>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
          >
            {/* 2 */}
            <Box className={classes.blogCard}>
              <img src={cetTwo} alt="coders block" className={classes.img} />
              <Container>
                <Typography variant="h5" className={classes.blogTitleTwo}>
                  Responsive Web Design
                </Typography>
                <Typography className={classes.date}>july 26, 2021</Typography>
                <Box className={classes.smallUnderline}></Box>
                <p className={classes.blogSub}>
                  Finished the old responsive certificate in 2021.My programming
                  journey started in 2020, and in 2023 i finished the new
                  version of responsive the certificate.
                </p>
              </Container>
            </Box>
          </div>
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1300"
          >
            {/* 3 */}
            <Box className={classes.blogCard}>
              <img src={cetThree} alt="coders block" className={classes.img} />
              <Container>
                <Typography variant="h5" className={classes.blogTitle}>
                  Front End Development Libraries
                </Typography>
                <Typography className={classes.date}>
                  january 20, 2021
                </Typography>
                <Box className={classes.smallUnderline}></Box>
                <p className={classes.blogSub}>
                  My React, Material-Ui and many more front end libraries
                  started in 2021,been using and loving it since then.Managing
                  states and editing apps is much more fun then it was before.
                </p>
              </Container>
            </Box>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Certificate;
