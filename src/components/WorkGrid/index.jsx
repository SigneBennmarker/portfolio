import React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./styles"
import Case from "../Case"
import Heading1 from "../Heading1"
import Tottot from "../../material/1x/tottotCasePic.png"
import LarsViner from "../../material/1x/LarsCasePic.png"
import { Link } from "gatsby"

export default function WorkGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Heading1 value="Take a look at some of my work!"></Heading1>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} className={classes.text}>
          <Link to="/tottot" className={classes.link}>
            <Case
              heading="tottot"
              subheading="UX Design & Full Stack Development"
              picture={{ backgroundImage: `url(${Tottot})` }}
              text="Me and two friands created this webbased application as a part of a coarse but have continued to develop the application since. Together we have worked"
            ></Case>
          </Link>
        </Grid>

        <Grid item xs={12} sm={12} className={classes.text}>
          <Link to="/larsviner" className={classes.link}>
            <Case
              heading="Vinsida"
              subheading="UX Design & Webb development"
              picture={{ backgroundImage: `url(${LarsViner})` }}
              text="A website containing all there is to know about the wines of Italy"
            ></Case>
          </Link>
        </Grid>
      </Grid>
    </div>
  )
}
