import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"
import InfoAboutMe from "../infoAboutme"
import ContentsGrid from "../ContentsGrid"
import Contact from "../Contact"
import AboutMe from "../AboutMe"
import WorkGrid from "../WorkGrid"
import Heading1 from "../Heading1"
import Paragraph from "../Paragraph"
import useStyles from "./styles"
import { Grid } from "@material-ui/core"
import NavLinks from "../NavLinks"
import Hamburger from "../Hamburger"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"

function SetNavigation() {
  const theme = useTheme()
  const showHam = useMediaQuery(theme.breakpoints.down("sm"))

  if (!showHam) {
    return <NavLinks></NavLinks>
  } else {
    return <Hamburger></Hamburger>
  }
}

export default function Nav() {
  const classes = useStyles()

  return (
    <div>
      <BrowserRouter className={classes.root}>

      <Grid container spacing={0} className={classes.root}>
       
        <Grid item xs={8} sm={8} className={classes.text}>
        <NavLink
          className={classes.ul}
          to="/index"
          style={{ textDecoration: "none" }}
        >
          <Heading1 value="Signe Bennmarker"></Heading1>
        </NavLink>
        </Grid>
        <Grid item xs={4} sm={4} className={classes.text}>
        <SetNavigation> </SetNavigation>
        </Grid>
        
      </Grid>
       

      
       
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
        </Switch>
      </BrowserRouter>
    </div>
  )
}
