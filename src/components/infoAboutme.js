import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from 'react-router-dom';
import Portrait from '../material/testBildGul.png'
 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
  },
  pic: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secodary,
  },
  text:{
    padding: theme.spacing(5),
    textAlign: 'left',
    color: theme.palette.text.secodary,
    alignItems: 'center',
  }
}));

export default function InfoAboutMe() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={6} sm={6} className = {classes.pic}>
            
          <img src = {Portrait} alt='Picture of me' className = "Portrait" width = "55%"/>
              
              
        </Grid>
        <Grid item xs={6} sm={6} className = {classes.text}>
            
          
            <h1>Hi, my name is Signe </h1>
            <p>SKVZDF wert
 
        </p>


          
            
            
      </Grid>
      </Grid>
    </div>
  );
}