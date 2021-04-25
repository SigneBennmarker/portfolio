import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import useStyles from "./styles"
import { spacing } from '@material-ui/system';
import Grid from "@material-ui/core/Grid"


import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import ContactComp from "../ContactComp"
import AboutMe from "../AboutMe"
import Case from "../Case"

export default function WorkGrid() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <Grid container spacing={0} className={classes.root}>
        {/* <Grid item xs={12} sm={12} className={classes.pic}>
        <Case value ="SFD"></Case>
        </Grid> */}
        <Grid item xs={12} sm={12} className={classes.text}>
        <Case value ="SFD"></Case>
        </Grid>
        <Grid item xs={12} sm={12} className={classes.text}>
        <Case value ="SFD"></Case>
        </Grid>
        
      </Grid>

      
      

    </div>
  )
}
