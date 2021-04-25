import React from "react"
import useStyles from "./styles"

const Heading2 = ({ value }) => {
  const classes = useStyles()
  return <h1 className={classes.style}>{value}</h1>
}

export default Heading2
