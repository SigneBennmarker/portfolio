import React, { useState, useEffect, useContext } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom"
import ContentsGrid from "../ContentsGrid"
import Contact from "../Contact"
import AboutMe from "../AboutMe"
import WorkGrid from "../WorkGrid"
import Heading1 from "../Heading1"
import Paragraph from "../Paragraph"
import useStyles from "./styles"
import { Grid } from "@material-ui/core"
import NavLinks from "../NavLinks"
import HamburgerMenu from "../HamburgerMenu"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Link } from "react-scroll"

function SetNavigation() {
  const theme = useTheme()
  const showHam = useMediaQuery(theme.breakpoints.down("sm"))

  if (!showHam) {
    return <NavLinks></NavLinks>
  } else {
    return <HamburgerMenu></HamburgerMenu>
  }
}

export default function Nav() {
  const classes = useStyles()
  //const AboutRef = useContext(AboutContext);


  return (
    <div>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={9} sm={10} md={7} lg={8} xl={9} className={classes.text}>
          <Heading1
            value="SIGNE BENNMARKER"
            className={classes.ul}
            to="/index"
            style={{ textDecoration: "none" }}
          ></Heading1>
        </Grid>
        <Grid item xs={3} sm={2} md={5} lg={4} xl={3} className={classes.text}>
          <SetNavigation> </SetNavigation>
        </Grid>
      </Grid>

      {/*       
       
        <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/myWork">
            <WorkGrid />
          </Route>
          <Route path="/index">
            <WorkGrid />
          </Route>
          <Route path="/">
            <WorkGrid />
          </Route>
          <Route path="">
            <WorkGrid />
          </Route>
        </Switch> */}
    </div>
  )
}
