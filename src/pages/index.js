import React, { useRef, useEffect } from "react"
 import { BrowserRouter, Route, Switch, Link, useLocation, Router } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
//¨
import '../style.css';
import ContentsGrid from '../components/ContentsGrid';
import InfoAboutMe from '../components/infoAboutme'
import NavBar from "../components/Nav";
import AboutMe from '../components/AboutMe'
import Contact from '../components/Contact'
import WorkGrid from '../components/WorkGrid'




export default function Home(){
  const AboutRef = useRef(null)

  return( 

      <BrowserRouter >
     
              <NavBar className = "header"></NavBar>

              {/* {type === "" && <InfoAboutMe />} */}

              {/* <Switch>
                  <Route path="/about">
                      <InfoAboutMe className="infoAboutMe"/>
                  </Route>
              </Switch> 
 */}
<AboutMe ref={AboutRef}></AboutMe>
          
{/* <Switch>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/myWork">
            <WorkGrid />
          </Route>
          <Route path="/index">
            <WorkGrid />
          </Route>
          <Route path="/">
            <WorkGrid />
          </Route>
          <Route path="">
            <WorkGrid />
          </Route>
        </Switch> */}


        </BrowserRouter>
  
       
  );
  
}



// export default function Home() {

//     return (

//         <div className = "comingSoon" onLoad = "FadeIn()">
           
//         <h1>COMING SOON</h1>
       

//         </div>
//     )
// }