import React from "react"
import '../style.css'
import FullWidthGrid from './Nav'
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//import About from '../About.js';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    alignContent: 'space-between'
    
  },
  links: {
    padding: theme.spacing(2),
    textAlign: 'right',
    alignContent: 'space-between'
    
  },
}));


const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <nav>
        <ul>
      <Grid container spacing={0}>
    
        <Grid item xs={12} sm={6}>
      <h1>SIGNE BENNMARKER</h1>
      <h2>M.Sc.Eng STUDENT IN INTERACTION AND DESIGN</h2>
    
        </Grid>
  

        <Grid item xs={6} sm={2} className = {classes.links}><Link to= "/about"><p>About Me</p></Link>
          
        </Grid>
        <Grid item xs={6} sm={2} className = {classes.links}> <p>My Work</p>
        
        </Grid>
        <Grid item xs={6} sm={2} className = {classes.links}> <p>Contact</p>
          
        </Grid>
      </Grid>
      </ul>
      </nav>

  </div>

  
  );
}


