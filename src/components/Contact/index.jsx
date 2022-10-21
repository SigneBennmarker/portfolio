import React from "react"
import useStyles from "./styles"
import Heading2 from "../Heading2"
import Paragraph from "../Paragraph"
import linkedInIcon from "../../material/linkedIn.png"
import emailIcon from "../../material/emailIcon.png"
import Grid from "@material-ui/core/Grid"
import "../../style.css"

const Contact = ({ value }) => {
  const contact = useStyles()
  return (
    <Grid container spacing={0} className={contact.root}>
      <Grid item xs={12} sm={12} md={12} lg={12} className={contact.item}>
        <Heading2 value="Say Hi! ☕️"></Heading2>
        <Paragraph value="Get in touch with me to discuss working together "></Paragraph>
        <Grid container className={contact.elements}>
          <Grid item xs={1} sm={2}></Grid>
          <Grid item xs={5} sm={4} className={contact.element}>
            <a
              href="https://www.linkedin.com/in/signebennmarker/"
              style={{ textDecoration: "none" }}
            >
              <img
                src={linkedInIcon}
                alt="Linked in icon"
                className={contact.icon}
                width="35%"
              />
            </a>
          </Grid>

          <Grid item xs={5} sm={4} className={contact.element}>
            <a
              href="mailto:Signe.bennmarker@hotmail.com"
              style={{ textDecoration: "none" }}
            >
              <img
                src={emailIcon}
                alt="Email icon"
                className={contact.icon}
                width="35%"
              />
            </a>
          </Grid>
          <Grid item xs={1} sm={2}></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Contact
