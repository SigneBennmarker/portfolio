import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import InfoAboutMe from './infoAboutme';
import ContentsGrid from './ContentsGrid';
import ContactComp from './ContactComp'
import MyWorkComp from './MyWorkComp'
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

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>  
      
      <BrowserRouter>
      <nav>
      <ul>
      <li><Link to= '/index' className="navLinks"> <h1>
          SIGNE BENNMARKER
        </h1></Link></li>
       
   
        
          <li><Link to= '/about' className="navLinks"><h3>About Me</h3></Link></li>
          <li><Link to= '/contact' className="navLinks"><h3>Contact</h3></Link></li>
          <li><Link to = '/index' className="navLinks"><h3> My work</h3></Link></li>

        </ul>
      </nav>
      <Switch>
          <Route path="/about">
            <InfoAboutMe />
          </Route>
          <Route path="/contact">
            <ContactComp />
          </Route>
          <Route path="/myWork">
            <MyWorkComp />
          </Route>
          <Route path="/index">
            <MyWorkComp />
          </Route>
          <Route path="/">
            <MyWorkComp />
          </Route>
          <Route path="">
            <ContentsGrid />
          </Route>
          
          
      
      </Switch>
      </BrowserRouter>
       

        
     

    </div>
  );
}