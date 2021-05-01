import React from "react"
import useStyles from "./styles"
import Heading2 from "../Heading2"
import Heading3 from "../Heading3"
import Paragraph from "../Paragraph"
import linkedInIcon from '../../material/linkedIn.png'
import emailIcon from '../../material/emailIcon.png'
import "../../style.css"

import Grid from "@material-ui/core/Grid"
import Tottot from "../../material/tottot.png"
import { Link } from "react-router-dom"

const Contact = ({ value }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.item}>
        <Heading2 value="Say Hi! ☕️"></Heading2>
        <Paragraph value="Get in touch with me to discuss working together "></Paragraph>
        <Grid container className={classes.elements}>
          <Grid item xs={1} sm={2} ></Grid>
          <Grid item xs={5} sm={4} className={classes.element}>
            <a href="https://www.linkedin.com/in/signebennmarker/" style={{ textDecoration: "none" }}>
            <img
            src={linkedInIcon}
            alt="Linked in icon"
            className={classes.icon}
            width="35%"
            
          />
            </a>
          </Grid>

          <Grid item xs={5} sm={4} className={classes.element}>
            <a href="mailto:Signe.bennmarker@hotmail.com"  style={{ textDecoration: "none" }}>
            <img
            src={emailIcon}
            alt="Email icon"
            className={classes.icon}
            width="35%"
          />
            </a>
          </Grid>
          <Grid item xs={1} sm={2}></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact
