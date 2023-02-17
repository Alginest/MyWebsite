import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import block from "../../img/codersblock.jpeg";
import coffe from "../../img/caffe.webp";
import vscode from "../../img/vscode.jpg";
const Blog = () => {
  const classes = useStyles();
  return (
    <section className={classes.blog} id="blog">
      <Container className={classes.bigCont}>
        {/* Title */}

        <div
          data-aos="fade-right"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Typography align="center" className={classes.title}>
            Blog
          </Typography>
          <Box className={classes.center}>
            <div className={classes.underline} />
          </Box>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
        >
          <Grid container className={classes.gridCont} spacing={2}>
            <Grid item lg={3}>
              <Box className={classes.blogCard}>
                <img src={block} alt="coders block" className={classes.img} />
                <Container>
                  <Typography variant="h5" className={classes.blogTitle}>
                    Breaking Your Coder's Block
                  </Typography>
                  <Typography className={classes.date}>
                    january 6, 2020
                  </Typography>
                  <Box className={classes.smallUnderline}></Box>
                  <p className={classes.blogSub}>
                    At one time or another,as a developer, we've all fround
                    ourselves hopelessly stuck on a coding issue...
                  </p>
                </Container>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Box className={classes.blogCard}>
                <img src={coffe} alt="caffein" className={classes.img} />
                <Container>
                  <Typography variant="h5" className={classes.blogTitle}>
                    The Affects Of Caffein On Brain
                  </Typography>
                  <Typography className={classes.date}>
                    april 10, 2020
                  </Typography>
                  <Box className={classes.smallUnderline}></Box>
                  <p className={classes.blogSub}>
                    Caffein is one of the keys,for me to stay productive, it
                    energizes the body,and affects the brain in good ways.
                  </p>
                </Container>
              </Box>
            </Grid>

            <Grid item lg={3}>
              <Box className={classes.blogCard}>
                <img src={block} alt="coders block" className={classes.img} />
                <Container>
                  <Typography variant="h5" className={classes.blogTitle}>
                    Breaking Your Coder's Block
                  </Typography>
                  <Typography className={classes.date}>
                    march 22, 2021
                  </Typography>
                  <Box className={classes.smallUnderline}></Box>
                  <p className={classes.blogSub}>
                    At one time or another,as a developer, we've all fround
                    ourselves hopelessly stuck on a coding issue...
                  </p>
                </Container>
              </Box>
            </Grid>
            <Grid item lg={3}>
              <Box className={classes.blogCard}>
                <img src={vscode} alt="coders block" className={classes.img} />
                <Container>
                  <Typography variant="h5" className={classes.blogTitle}>
                    VScode Extesions That Are Essential
                  </Typography>
                  <Typography className={classes.date}>
                    April 4, 2021
                  </Typography>
                  <Box className={classes.smallUnderline}></Box>
                  <p className={classes.blogSub}>
                    Having really good vscode extesions incresase ur
                    productivity and also makes this more readable and simple
                  </p>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
