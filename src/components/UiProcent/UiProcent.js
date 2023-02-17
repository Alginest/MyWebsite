import { Box, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
const UiProcent = () => {
  const classes = useStyles();
  return (
    <>
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>HTML</Typography>
          </Box>

          <Box className={classes.underBox}>
            <Box className={classes.precentBox}></Box>
          </Box>

          <Box className={classes.numberBox}>
            <Typography className={classes.numDoc}>90%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>CSS</Typography>
          </Box>
          <Box className={classes.underBox}>
            <Box className={classes.precentBox}></Box>
          </Box>
          <Box className={classes.numberBox}>
            <Typography className={classes.numDoc}>90%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>React</Typography>
          </Box>
          <Box className={classes.underBox}>
            <Box className={classes.precentBox}></Box>
          </Box>
          <Box className={classes.numberBox}>
            <Typography className={classes.numDoc}>90%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>Javascript</Typography>
          </Box>
          <Box className={classes.underBoxTwo}>
            <Box className={classes.jasDoc}></Box>
          </Box>
          <Box className={classes.jasSm}>
            <Typography className={classes.numDoc}>80%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>Material UI</Typography>
          </Box>
          <Box className={classes.underBoxTwo}>
            <Box className={classes.muiDoc}></Box>
          </Box>
          <Box className={classes.muiSm}>
            <Typography className={classes.numDoc}>80%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>Git</Typography>
          </Box>
          <Box className={classes.underBoxThree}>
            <Box className={classes.npmDoc}></Box>
          </Box>
          <Box className={classes.npmSm}>
            <Typography className={classes.numDoc}>70%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>Photoshop</Typography>
          </Box>
          <Box className={classes.underBoxFour}>
            <Box className={classes.psDoc}></Box>
          </Box>
          <Box className={classes.psSm}>
            <Typography className={classes.numDoc}>50%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>Firebase</Typography>
          </Box>
          <Box className={classes.underBoxFive}>
            <Box className={classes.fireDoc}></Box>
          </Box>
          <Box className={classes.fireSm}>
            <Typography className={classes.numDoc}>40%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>Redux</Typography>
          </Box>
          <Box className={classes.underBoxFive}>
            <Box className={classes.fireDoc}></Box>
          </Box>
          <Box className={classes.fireSm}>
            <Typography className={classes.numDoc}>40%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>Styled</Typography>
          </Box>
          <Box className={classes.underBoxFive}>
            <Box className={classes.fireDoc}></Box>
          </Box>
          <Box className={classes.fireSm}>
            <Typography className={classes.numDoc}>40%</Typography>
          </Box>
        </Box>
        <Box className={classes.megaBox}>
          <Box className={classes.nameBox}>
            <Typography className={classes.numProc}>Bootstrap</Typography>
          </Box>
          <Box className={classes.bootDoc}></Box>
          <Box className={classes.bootSm}>
            <Typography className={classes.numDoc}>30%</Typography>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default UiProcent;
