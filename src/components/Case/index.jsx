import React from "react"
import useStyles from "./styles"
import Heading2 from "../Heading2"
import Heading3 from "../Heading3"
import Paragraph from "../Paragraph"
import Grid from "@material-ui/core/Grid"
import Portrait from "../../material/testBildGul.png"

const Case = ({heading, subheading, picture, text }) => {
  const classes = useStyles()
  return (
    <Grid container spacing={0} className={classes.root} style={picture}>
      <Grid item xs={12} sm={6} className={classes.text} >
        <Heading2 value={heading}></Heading2>
        <Heading3 value={subheading}></Heading3>
        <div className={classes.paragraph}>
        <Paragraph  value={text}></Paragraph>
        </div>
              </Grid>
        <Grid item xs={12} sm={6} className={classes.pic} >
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
