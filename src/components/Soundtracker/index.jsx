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
        value="The app integrates both TMDB and Spotify APIs to provide users with relevant information about movies and its soundtrack. To access the service, users are required to log in to their Spotify account. Once logged in, they can search for any movie on The Movie Database through the use of the API and GraphQL. The app will display all relevant information about the movie and give users the option to access a curated playlist from Spotify that matches the movie's soundtrack. The playlist can be played directly on the website for a seamless experience."
      ></Paragraph>

      <StaticImage
        src="../../material/STproject.png"
        alt="project"
        className="Portrait"
        placeholder="blurred"
      />
    </div>
  )
}
