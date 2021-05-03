import React from "react"
import useStyles from "./styles"
import Heading2 from "../Heading2"
import Heading3 from "../Heading3"
import Paragraph from "../Paragraph"
import Grid from "@material-ui/core/Grid"
import Portrait from "../../material/testBildGul.png"

const Case = ({heading, subheading, picture, text }) => {
  const caseStyle = useStyles()
  return (
    <Grid container spacing={0} className={caseStyle.root} style={picture}>
      <Grid item xs={12} sm={6} className={caseStyle.text} >
        <Heading2 value={heading}></Heading2>
        <Heading3 value={subheading}></Heading3>
        <div className={caseStyle.paragraph}>
        <Paragraph  value={text}></Paragraph>
        </div>
              </Grid>
        <Grid item xs={12} sm={6} className={caseStyle.pic} >
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