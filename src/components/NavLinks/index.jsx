import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter, Route, Switch,  } from "react-router-dom"
import { Link } from 'gatsby'

import Paragraph from "../Paragraph"
import useStyles from "./styles"
import Heading3 from "../Heading3"

export default function NavLinks() {
  const classes = useStyles()

  return (
    <ul
      className={classes.ul}
      style={{
        display: "flex",
        listStyle: "none",
        justifyContent: "space-around",
      }}
    >
      <li className={classes.links}>
        <Link
          to="/mywork"
          style={{ textDecoration: "none" }}
          activeStyle={{
            fontWeight: 1800,
            color: "#1D0E0E",
            textDecoration: "underline",
          }}
        >
          <h3> My work</h3>
        </Link>
      </li>
      <li className={classes.links}>
        <Link
          to="/about"
          style={{ textDecoration: "none" }}
          activeStyle={{
            fontWeight: 1800,
            color: "#1D0E0E",
            textDecoration: "underline",
          }}
        >
          <h3>About Me</h3>
        </Link>
      </li>

      <li className={classes.links}>
        <Link
          to="/contact"
          style={{ textDecoration: "none" }}
          activeStyle={{
            fontWeight: 1800,
            color: "#1D0E0E",
            textDecoration: "underline",
          }}
        >
          <h3>Contact</h3>
        </Link>
      </li>
    </ul>
  )
}