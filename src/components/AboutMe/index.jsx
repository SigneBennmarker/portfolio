import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"

import Paragraph from "../Paragraph"
import Heading1 from "../Heading1"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(1),
    justify: "space-around",
    alignItems: "stretch",
    paddingTop: "12vh",
    paddingBottom: theme.spacing(5),

    [theme.breakpoints.down("xs")]: {
      paddingTop: theme.spacing(2),
    },
  },
  pic: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secodary,
  },
  text: {
    padding: theme.spacing(0),
    textAlign: "left",
    color: theme.palette.text.secodary,
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },
}))

export default function AboutMe() {
  const about = useStyles()

  return (
    <Grid container spacing={0} className={about.root}>
      <Grid item xs={2} sm={2}></Grid>
      <Grid item xs={8} sm={3} className={about.pic}>
        <StaticImage
          src="../../material/FullSizeRender.jpg"
          alt="Picture of me"
          className="Portrait"
          placeholder="blurred"
          width={705}
        />
      </Grid>
      <Grid item xs={0} sm={1}></Grid>
      <Grid item xs={12} sm={4} className={about.text}>
        <Heading1 value="Hi, my name is Signe!"></Heading1>

        <Paragraph
          value="I am a M.Sc.Eng student in interacion and design at Umeå 
            University and strive to learn more about my big intests, UX design and front end development. 
            When I’m not busy doing that I 
               love to watch reality shows, work out or listen to podcasts. "
        ></Paragraph>
      </Grid>
      <Grid item xs={0} sm={2}></Grid>
    </Grid>
  )
}
