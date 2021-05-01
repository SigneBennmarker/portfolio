import React, { useRef, useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useLocation,
  Router,
} from "react-router-dom"
// import Grid from '@material-ui/core/Grid';
//¨
import '../../style.css';

import NavBar from "../Nav"
import AboutMe from "../AboutMe"
import Contact from "../Contact"
import WorkGrid from "../WorkGrid"

export default function MiddleSection() {
  const AboutRef = useRef(null)
  const WorkRef = useRef(null);

  return (
      <>
    <div  id="about"> <AboutMe/></div>
    <div id="workGrid"> <WorkGrid /></div>
     
      
      <Contact id="contact"/>
      </>
  )
}

// export default function Home() {

//     return (

//         <div className = "comingSoon" onLoad = "FadeIn()">

//         <h1>COMING SOON</h1>

//         </div>
//     )
// }
