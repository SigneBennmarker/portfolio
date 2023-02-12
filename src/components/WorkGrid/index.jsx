import React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./styles"
import Case from "../Case"
import Heading1 from "../Heading1"
import Tottot from "../../material/1x/tottotCasePic.png"
import LarsViner from "../../material/1x/LarsCasePic.png"
import TalbleTalk from "../../material/123456.png"

import Tenet from "../../material/SoundtrackerMockup.png"
import { Link } from "gatsby"

export default function WorkGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Heading1 value="Take a look at some of my work!"></Heading1>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} className={classes.text}>
          <Link to="/tableTalk" className={classes.link}>
            <Case
              heading="Table Talk"
              subheading="UX Design & App development"
              picture={{ backgroundImage: `url(${TalbleTalk})` }}
              text="A React Native app that help players start conversating and uses their phones as the playing board."
            ></Case>
          </Link>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.text}>
          <Link to="/soundtracker" className={classes.link}>
            <Case
              heading="Soundtracker app"
              subheading="UX Design & Web development"
              picture={{ backgroundImage: `url(${Tenet})` }}
              text="A web app that uses TMDB and Spotify APIs to find movies and display matching playlists."
            ></Case>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.text}>
          <Link to="/tottot" className={classes.link}>
            <Case
              heading="tottot"
              subheading="UX Design & Full Stack Development"
              picture={{ backgroundImage: `url(${Tottot})` }}
              text="A webbased application created to start conversation."
            ></Case>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.text}>
          <Link to="/larsviner" className={classes.link}>
            <Case
              heading="Vinsida"
              subheading="UX Design & Web development"
              picture={{ backgroundImage: `url(${LarsViner})` }}
              text="A website containing all there is to know about the wines of Italy."
            ></Case>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}
