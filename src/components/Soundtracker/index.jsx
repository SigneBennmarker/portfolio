import React from "react"
import useStyles from "./styles"
import Heading1 from "../Heading1"
import Paragraph from "../Paragraph"
import { StaticImage } from "gatsby-plugin-image"

export default function Soundtracker() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Heading1 value="Soundtracker app"></Heading1>

            <Paragraph
                className={classes.text}
                value="This app uses TMDB and Spotifys API to display information about searched movies and find soundtrack playlists to that movie. 
"></Paragraph>


            <Paragraph className={classes.text}
                value="To be able to use the service the user must first log in to their Spotify account. After that they can search for any movie in The Movie Database, with is retrieved though their API, using graphQL. Information about the movie will displayed to the user, the user will also be able to get a Spotify-playlist that matches the movie and play the music directly on the website." ></Paragraph>

            <StaticImage
                src="../../material/STproject.png"
                alt="project"
                className="Portrait"
                placeholder="blurred"

            />

        </div>
    )
}
