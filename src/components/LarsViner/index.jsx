import React, { useRef } from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./styles"
import "../../style.css"
import LarsPage1 from "../../material/Hemskärm.png"
import GraficProfile from "../../material/gp_Lars.png"
import Piemonte from "../../material/piemonte.png"
import Allmant from "../../material/allmant_Lars.png"
import Heading2 from "../Heading2"
import Heading3 from "../Heading3"


import Heading1 from "../Heading1"
import { Container } from "@material-ui/core"
import Paragraph from "../Paragraph"

export default function LarsViner() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Heading1 value="Lars Viner - A wine information website"></Heading1>
      <Paragraph
        className={classes.text}
        value="I worked with this project as a part of a course called Web Technology for Engineers systems. I worked alone on this project. The goal of the project was to find an already existing website, create your own redesign of that page and finally implement the page using HTML/CSS and javascript. The site i chose to recreate was a page called Lars Vinsida."
      ></Paragraph>

      <a href="http://larsvinsida.vininfo.nu/italien/italien.htm">

        Check out the current design of Lars Vinsida here
      </a>

      <Paragraph
        className={classes.text}
        value="First of all i created very simple lo-fi prorortypes, and did some wireframing. After that, the next step was to create a grapfic profile. 
"
      ></Paragraph>

      <img
        src={GraficProfile}
        alt="Picture of me"
        className={classes.pic}
        width="85%"
      />
    <Heading2 value = "The results" className={classes.text}></Heading2>
    <Heading3 value = "Desktop version" className={classes.text}></Heading3>

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

      <Heading3 value = "Mobile version" className={classes.text}></Heading3>

    </div>
  )
}
