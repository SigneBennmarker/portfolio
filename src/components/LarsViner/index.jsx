import React, { useRef } from "react"
import Grid from "@material-ui/core/Grid"
import useStyles from "./styles"
import { makeStyles } from "@material-ui/core/styles"
import { spacing } from "@material-ui/system"
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import AboutMe from "../AboutMe"
import Case from "../Case"
import Contact from "../Contact"
import Heading1 from "../Heading1"
import { Fade, Container } from "@material-ui/core"

export default function Tottot() {
    const classes = useStyles()

  return (
    <Container className={classes.root}>
      <Heading1 value="Wine information page - Lars viner"></Heading1>
    </Container>
  )
}
