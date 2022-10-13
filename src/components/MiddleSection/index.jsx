import React, { useRef } from "react"
import "../../style.css"
import NavBar from "../Nav"
import AboutMe from "../AboutMe"
import Contact from "../Contact"
import WorkGrid from "../WorkGrid"

export default function MiddleSection() {
  const AboutRef = useRef(null)
  const WorkRef = useRef(null)

  return (
    <>
      <div id="about">
        {" "}
        <AboutMe />
      </div>
      <div id="workGrid">
        {" "}
        <WorkGrid />
      </div>

      <Contact id="contact" />
    </>
  )
}
