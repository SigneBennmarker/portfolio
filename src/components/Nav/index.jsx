import React, { useState, useEffect, useContext } from "react"
import Heading1 from "../Heading1"
import Paragraph from "../Paragraph"
import useStyles from "./styles"
import { Grid } from "@material-ui/core"
import NavLinks from "../NavLinks"
import HamburgerMenu from "../HamburgerMenu"
import { useTheme } from "@material-ui/core/styles"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { Link } from "gatsby"

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

  return (
    <div>
      <Grid container spacing={0} className={classes.root}>
        <Grid item xs={9} sm={10} md={7} lg={8} xl={8} className={classes.logo}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Heading1
              value="SIGNE BENNMARKER"
              className={classes.ul}
              style={{ textDecoration: "none" }}
            ></Heading1>
          </Link>
        </Grid>
        <Grid item xs={3} sm={2} md={5} lg={4} xl={3} className={classes.text}>
          <SetNavigation> </SetNavigation>
        </Grid>
      </Grid>
    </div>
  )
}
