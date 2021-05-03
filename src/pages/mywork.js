import React from "react"

import "../style.css"

import NavBar from "../components/Nav"

import WorkGrid from "../components/WorkGrid"

export default function MyWork() {
  return (
    <div>
      <NavBar></NavBar>
      <WorkGrid />
    </div>
  )
}

// export default function Home() {

//     return (

//         <div className = "comingSoon" onLoad = "FadeIn()">

//         <h1>COMING SOON</h1>

//         </div>
//     )
// }
