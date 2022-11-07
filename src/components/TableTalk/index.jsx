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
                value="A project that resulted in an application called TableTalk that creates easily accessible conversations without the users being stuck in their phones. Each person in the party needs to have the application on their own mobile phone. One person chooses to create a new room that the others can connect to. When everyone is connected, the mobile phones should be laid down visibly on the table where they form the playing board. 

                One player reads out the first question and the game randomly selects who should answer it. The game continues until the questions run out in the selected category or the game leader chooses to end the game.
                "></Paragraph>



            <StaticImage
                src="../../material/leaderVSothernew.png"
                alt="game"
                className="Portrait"
                placeholder="blurred"

            />


            <Paragraph
                className={classes.text}
                value="To create the iOS application, the React Native framework was used together with the open-source platform Expo for the front end. Node.js and Express were used for the backend. To sync the players, the socket library Socket.IO was used as communication between the clients (players) and the server. To test the application, Xcode's iPhone simulators were used on the development computers and Expo's app was used to open the application on real iPhones."  ></Paragraph>



        </div>
    )
}
