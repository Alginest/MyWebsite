import { Box, Link, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import CodeIcon from "@material-ui/icons/Code";
import MailIcon from "@material-ui/icons/Mail";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
const Footer = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Link className={classes.arrowUp} href="#header">
        <ArrowUpwardIcon className={classes.icoUp} />
      </Link>
      <Box className={classes.socialLinks}>
        <Link
          className={classes.linkTo}
          href="https://www.linkedin.com/in/aldin-durakovic-b1a781266/"
        >
          <Box className={classes.icoBg}>
            <LinkedInIcon className={classes.linkIco} />
          </Box>
        </Link>
        <Link className={classes.linkTo} href="https://github.com/Alginest">
          <Box className={classes.icoBg}>
            <GitHubIcon className={classes.linkIco} />
          </Box>
        </Link>
        <Link
          className={classes.linkTo}
          href="https://www.freecodecamp.org/alginest"
        >
          <Box className={classes.icoBg}>
            <CodeIcon className={classes.linkIco} />
          </Box>
        </Link>
        <Link
          className={classes.linkTo}
          href="https://app.netlify.com/teams/alginest/overview"
        >
          <Box className={classes.icoBg}>
            <MailIcon className={classes.linkIco} />
          </Box>
        </Link>
      </Box>
      <Typography align="center" className={classes.name}>
        ALDIN DURAKOVIĆ <span className={classes.span}>©2015</span>
      </Typography>
    </Box>
  );
};

export default Footer;
