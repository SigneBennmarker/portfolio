import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>

        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}><h1>SIGNE BENNMARKER</h1></Paper>
        </Grid>
        <Grid item xs={0} sm={3}>
        </Grid>
 
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>About Me</Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>My Work</Paper>
        </Grid>
        <Grid item xs={6} sm={2}>
          <Paper className={classes.paper}>Cin</Paper>
        </Grid>
      </Grid>
    </div>
  );
}