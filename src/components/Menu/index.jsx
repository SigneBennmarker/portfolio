import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import NavLinks from "../NavLinks"
import useStyles from "./styles"
import Heading2 from "../Heading2";


export default function Menu() {
    const classes = useStyles();


  return (

    <ul className={classes.root}>
        <li className = {classes.link}><Link to="/mywork" style={{ textDecoration: "none" }}><Heading2 value="Work"></Heading2></Link></li>
        <li className = {classes.link}><Link to="/about" style={{ textDecoration: "none" }}><Heading2 value="About"></Heading2></Link></li>
        <li className = {classes.link}><Link to="/contact" style={{ textDecoration: "none" }}><Heading2 value="Contact"></Heading2></Link></li>
    </ul>

  

  )
}
