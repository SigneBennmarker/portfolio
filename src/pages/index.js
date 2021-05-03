import React from "react"
import "../style.css"
import NavBar from "../components/Nav"
import WorkGrid from "../components/WorkGrid"
import Grid from "@material-ui/core/Grid"


const IndexPage = () => {
 

  return (
    <div>
      <NavBar></NavBar>
      <WorkGrid> </WorkGrid>
    </div>
  )
}

export default IndexPage;

