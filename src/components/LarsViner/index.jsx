import React from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./styles"
import "../../style.css"
import LarsPage1 from "../../material/Hemskärm.png"
import GraficProfile from "../../material/gp_Lars.png"
import Piemonte from "../../material/piemonte.png"
import Allmant from "../../material/allmant_Lars.png"
import Heading2 from "../Heading2"

import Heading1 from "../Heading1"
import Paragraph from "../Paragraph"

export default function LarsViner() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Heading1 value="A wine information website"></Heading1>
      <Paragraph
        className={classes.text}
        value="I worked with this project as a part of a course called Web Technology for Engineers systems. I worked alone on this project. The goal of the project was to find an already existing website, create your own redesign of that page and finally implement the page using HTML/CSS and JavaScript. The site I chose to recreate was a page called Lars Vinsida."
      ></Paragraph>

      <a href="http://larsvinsida.vininfo.nu/italien/italien.htm">
        Check out the current design of Lars Vinsida here
      </a>

      <Paragraph
        className={classes.text}
        value="First of all I created very simple lo-fi prototypes, and did some wireframing. After that, I created a grapfic profile which can be sen below. 
"
      ></Paragraph>

      <img src={GraficProfile} alt="Me" className={classes.pic} width="85%" />
      <Heading2 value="The results" className={classes.text}></Heading2>
      <Paragraph
        className={classes.text}
        value="Some pictures of the final website is shown below."
      ></Paragraph>
      <Grid container spacing={0} className={classes.gridroot}>
        <Grid item xs={12} sm={6} ml={4} className={classes.pic}>
          {" "}
          <img
            src={LarsPage1}
            alt="Landing page"
            className="Portrait"
            width="95%"
          />
        </Grid>

        <Grid item xs={12} sm={6} ml={4} className={classes.pic}>
          <img
            src={Piemonte}
            alt="Page about the piemonte region"
            className="Portrait"
            width="95%"
          />
        </Grid>
        <Grid item xs={12} sm={6} ml={4} className={classes.pic}>
          <img
            src={Allmant}
            alt="General Page"
            className="Portrait"
            width="95%"
          />
        </Grid>
      </Grid>
    </div>
  )
}
