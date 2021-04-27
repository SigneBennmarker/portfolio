import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom"

import Paragraph from "../Paragraph"
import useStyles from "./styles"

export default function NavLinks() {
  const classes = useStyles()

  return (
    <div>
      <ul className={classes.ul}>
        <li className={classes.links}>
          <NavLink
            to="/about"
            style={{ textDecoration: "none" }}
            activeStyle={{
              fontWeight: 1800,
              color: "#1D0E0E",
              textDecoration: "underline",
            }}
          >
            <h3>About Me</h3>
          </NavLink>
        </li>

        <li className={classes.links}>
          <NavLink
            to="/index"
            style={{ textDecoration: "none" }}
            activeStyle={{
              fontWeight: 1800,
              color: "#1D0E0E",
              textDecoration: "underline",
            }}
          >
            <h3> My work</h3>
          </NavLink>
        </li>
        <li className={classes.links}>
          <NavLink
            to="/contact"
            style={{ textDecoration: "none" }}
            activeStyle={{
              fontWeight: 1800,
              color: "#1D0E0E",
              textDecoration: "underline",
            }}
          >
            <h3>Contact</h3>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}
