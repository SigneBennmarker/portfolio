import React from "react"
import useStyles from "./styles"
import Heading1 from "../Heading1"
import Paragraph from "../Paragraph"
import { StaticImage } from "gatsby-plugin-image"

export default function Tottot() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Heading1 value="TableTalk conversation game"></Heading1>

      <Paragraph
        className={classes.text}
        value="TableTalk is a mobile application that enables effortless and engaging conversations without players focusing their attention on their own mobile phones. To use the app, all members of the group need to have it installed on their individual mobile devices. The leader creates a new room for others to join, and once everyone is connected, their mobile phones are placed face up on the table, forming the game board. The game begins with a randomly selected player answering the first question, read out by the game leader, and continues until all questions in the selected category have been answered or the game leader decides to end it."
      ></Paragraph>

      <Paragraph
        className={classes.root}
        value="The iOS application of TableTalk was developed using the React Native framework and the open-source platform Expo for the front end, while the backend was built using Node.js and Express. Communication between clients (players) and the server was achieved using the socket library Socket.IO. Testing was carried out using Xcode's iPhone simulators on development computers and the Expo app on real iPhones."
      ></Paragraph>
      <StaticImage
        src="../../material/leaderVSothernew.png"
        alt="game"
        className="Portrait"
        placeholder="blurred"
      />
    </div>
  )
}
