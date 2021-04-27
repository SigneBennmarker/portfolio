import React from "react"
import useStyles from "./styles"
import Heading2 from "../Heading2"
import Heading3 from "../Heading3"
import Paragraph from "../Paragraph"

import Grid from "@material-ui/core/Grid"
import Tottot from '../../material/tottot.png'
import { Link } from "react-router-dom"

const Contact = ({ value }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={classes.item}>
        <Heading2 value = "Say Hi! ☕️"></Heading2>
        <Grid container className={classes.elements}>
            <Grid item xs={6} sm={6} className={classes.element}>
                <a href='https://www.linkedin.com/in/signebennmarker/' ><Heading3 value= " 🔗Linked in"></Heading3></a>
            </Grid>
      
        <Grid item xs={6} sm={6} className={classes.element}>
        
        <a href="mailto:Signe.bennmarker@hotmail.com"><Heading3 value=" 📫Mail"></Heading3></a>
        </Grid>
    </Grid>
    </Grid>
    </Grid>

)
}

export default Contact;
