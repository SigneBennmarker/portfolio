import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secodary,
  },
}));

export default function ContentsGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
              <h1>ETT CASE ELLER!?!</h1>
              <p>
                ahgäpo wräepifgjw rouhfe åwee ifwe err wei f eyu gbv vskjv vsjd vsdukuse t ertuks n                  
              </p>
              
              </Paper>
        </Grid>
      </Grid>
    </div>
  );
}