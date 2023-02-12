import React from "react"
import useStyles from "./styles"
import Heading1 from "../Heading1"
import Paragraph from "../Paragraph"
import TottotMockups from "../../material/tottotMockups.png"
import { StaticImage } from "gatsby-plugin-image"

export default function Tottot() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Heading1 value="tottot conversation game"></Heading1>

      <Paragraph
        className={classes.text}
        value="The tottot conversation game is inspired by the two-choice questions on Instagram stories that followers can vote on. Tottot makes these fun, divisive questions more accessible and easier to share, with young adults as its target audience. Users can play the game by themselves for self-discovery or with friends to start a conversation."
      ></Paragraph>

      <Paragraph value="The project aimed to create a web-based, database-driven quiz game called tottot. It was developed using the CodeIgniter framework with PHP, HTML, CSS, and JavaScript, with the database created in phpMyAdmin. The project's focus was on the backend as it was part of a course on Databases and Web-based Systems."></Paragraph>

      <Paragraph
        className={classes.text}
        value="The system consists of two connected databases, one storing all questions and answers and question categories, while the other only contains user information. Currently, only trusted users are allowed to add, edit, and delete questions in the game."
      ></Paragraph>
      <Paragraph
        className={classes.text}
        value="As a team, we collaborated on the creation of the web application and each contributed to various aspects of the project. My primary focus was on wireframing, hosting, and emailing functions."
      ></Paragraph>
      <StaticImage
        src="../../material/tt2.jpg"
        alt="tottot"
        className="Portrait"
        placeholder="blurred"
      />
    </div>
  )
}
