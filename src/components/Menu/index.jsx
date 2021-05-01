import React, { useState, useEffect } from "react"
import NavLinks from "../NavLinks"
import useStyles from "./styles"
import { NavLink } from "react-router-dom"
import Heading2 from "../Heading2";


export default function Menu() {
    const classes = useStyles();


  return (

    <ul className={classes.root}>
        <li className = {classes.link}><NavLink to="/about" style={{ textDecoration: "none" }}><Heading2 value="About"></Heading2></NavLink></li>
        <li className = {classes.link}><NavLink to="/work" style={{ textDecoration: "none" }}><Heading2 value="Work"></Heading2></NavLink></li>
        <li className = {classes.link}><NavLink to="/contact" style={{ textDecoration: "none" }}><Heading2 value="Contact"></Heading2></NavLink></li>
    </ul>

  

  )
}
