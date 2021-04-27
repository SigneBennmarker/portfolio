import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Link from "react-router-dom"
import Portrait from "../../material/testBildGul.png"
import Paragraph from "../Paragraph"
import Heading1 from "../Heading1"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    justify: "space-around",
    alignItems: "stretch",
  },
  pic: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secodary,
  },
  text: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secodary,
    alignItems: "center",
  },
}))

export default function AboutMe() {
  const classes = useStyles()

  return (
  
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={12} sm={6} className={classes.pic}>
          <img
            src={Portrait}
            alt="Picture of me"
            className="Portrait"
            width="55%"
          />
        </Grid>
        <Grid item xs={12} sm={6} className={classes.text}>
          <Heading1 value="Hi, my name is Signe!"></Heading1>

          <Paragraph
            value="I am a M.Sc.Eng student in interacion and design at Umeå 
            University and strive to learn more about my big intests, UX- design and full stack development. 
            When I’m not busy doing that I 
               love to watch reality shows, work out or listen to podcasts. "
          ></Paragraph>
        </Grid>
      </Grid>
    
  )
}
