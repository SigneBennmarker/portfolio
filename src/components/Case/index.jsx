import React from "react"
import useStyles from "./styles"
import Heading2 from "../Heading2"
import Heading3 from "../Heading3"
import Paragraph from "../Paragraph"
import Grid from "@material-ui/core/Grid"
import Portrait from "../../material/testBildGul.png"
import Tottot from '../../material/tottot.png'

const Case = ({ value }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={0} className={classes.root}>
      <Grid item xs={12} sm={6} className={classes.text}>
        <Heading2 value="tottot game"></Heading2>
        <Heading3 value="UX-Design —  Full Stack Development"></Heading3>

              </Grid>
        <Grid item xs={12} sm={6} className={classes.pic} style={{backgroundImage: `url(${Tottot})` }}>
        {/* <img
            src={Tottot}
            alt="Picture of me"
            className="Portrait"
          />   */}
        </Grid>
    </Grid>
  )
}

export default Case
