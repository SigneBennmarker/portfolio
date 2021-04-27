import React from "react";
import scrollToComponent from 'react-scroll-to-component';

import Grid from '@material-ui/core/Grid';
import '../style.css';
import Nav from '../components/Nav'; 
import AboutMe from '../components/AboutMe'
import WorkGrid from '../components/WorkGrid'



export default function About(){
 


  return (
    <div className = "home">

      <AboutMe></AboutMe>
      <WorkGrid></WorkGrid>
     
  

      
      </div>
       
  );}





// export default function Home() {

//     return (

//         <div className = "comingSoon" onLoad = "FadeIn()">
           
//         <h1>COMING SOON</h1>
       

//         </div>
//     )
// }