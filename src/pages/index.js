import React from "react";
// import { BrowserRouter, Route, Switch, Link, useLocation, Router } from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import '../style.css';
import Nav from '../components/Nav'; 
import ContentsGrid from '../components/ContentsGrid';
import InfoAboutMe from '../components/infoAboutme'
import NavBar from "../components/Nav";
import MyWorkComp from '../components/MyWorkComp'





export default function Home(){
  return( 
    <div className = "home">
              <NavBar className = "header"></NavBar>

              {/* {type === "" && <InfoAboutMe />} */}

              {/* <Switch>
                  <Route path="/about">
                      <InfoAboutMe className="infoAboutMe"/>
                  </Route>
              </Switch> 
 */}


          

       
    </div>
       
  );
  
}



// export default function Home() {

//     return (

//         <div className = "comingSoon" onLoad = "FadeIn()">
           
//         <h1>COMING SOON</h1>
       

//         </div>
//     )
// }