import React, { useRef, useState} from "react"
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles"
import { makeStyles } from "@material-ui/core/styles"
import { spacing } from '@material-ui/system';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom"
import AboutMe from "../AboutMe"
import Case from "../Case"
import Contact from "../Contact";
import Heading1 from '../Heading1'
import Tottot from '../../material/1x/tottotCasePic.png'
import LarsViner from '../../material/1x/LarsCasePic.png'



export default function WorkGrid() {
  const classes = useStyles();
  const [hovered, setHovered] = useState(false)

  return (
    <div className= {classes.root} >
        <Heading1 value="Take a look at some of my work!"></Heading1>
        <Grid container spacing={0}>
        {/* <Grid item xs={12} sm={12} className={classes.pic}>
        <Case value ="SFD"></Case>
        </Grid> */}
         
        <Grid item xs={12} sm={12} className={classes.text}>
        <Link to="/tottot" className={classes.link}>
        <Case  heading ="tottot" subheading= "UX-Design —  Full Stack Development" picture={{backgroundImage: `url(${Tottot})` }} text="Me and two friands created this webbased application as a part of a coarse but have continued to develop the application since. Together we have worked"></Case>
        </Link>
        </Grid>
       
        <Grid item xs={12} sm={12} className={classes.text}>
        <Link to="/larsviner" className={classes.link} >
        <Case heading="Lars Viner"  subheading= "UX-Design - Webb development" picture={{backgroundImage: `url(${LarsViner})` }} text ="Me and two friands created this webbased application as a part of a coarse but have continued to develop the application since. Together we have worked"></Case>
        </Link>
        </Grid>
        
      </Grid>

</div>
  )
}
