import React from "react"
import useStyles from "./styles"
import Heading1 from "../Heading1"
import Paragraph from "../Paragraph"
import TottotMockups from "../../material/tottotMockups.png"

export default function Tottot() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Heading1 value="tottot conversation game"></Heading1>

      <Paragraph
        className={classes.text}
        value="The tottot conversation game is inspired by the two-choice questions on
     The tottot conversation game is inspired by the two-choice questions on Instagram story that followers can vote on. With this application, these kinds of fun dividing questions become more accessible and easy to spread. The target group is young adults. They can use the application by themselves out of curiosity to get to know themselves and see what others' opinions are, or with friends to start a conversation."
      ></Paragraph>

      <Paragraph value="The goal of the project was to create a web-based database-driven application where users can play a simple quiz game. The database is created in phpMyAdmin and the MVC structure is developed in CodeIgniter with PHP, HTML, CSS and JavaScript. The name of the quiz is tottot."></Paragraph>
      <Paragraph value="I worked with this project as a part of a course called Databases and Web based systems,  and because of that the focus of the project has been on the backend. The system is built upon two connected databases, one that stores all questions with answers and modes where the question categories are stored. The other database only contains one schema, that contains the user information.  The users are, as of right now, people that are trusted to add, edit and delete the questions of the game."></Paragraph>
      <img src={TottotMockups} alt="Mockups" className="Portrait" width="90%" />

      <Paragraph
        className={classes.text}
        value="We shared a lot of the work and were all engaged in most elements of the
        creation of the web application, though I had the main responsibility
        regarding the wireframing, hosting and emailing functions."
      ></Paragraph>
    </div>
  )
}
