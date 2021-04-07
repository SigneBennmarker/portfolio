import React from "react";

import Grid from '@material-ui/core/Grid';

import '../style.css';


import Header from '../components/Header'; 
import ContentsGrid from '../components/ContentsGrid';
var ReactDOM = require('react-dom');


// export default function Home() {
//   return (
//     <div className = "home">
//       <Header className = "header">
//       </Header>


//       <ContentsGrid>
//       </ContentsGrid>
      
//       </div>
       
//   )
// }



export default function Home() {

    return (

        <div className = "comingSoon" onLoad = "FadeIn()">
           
        <h1>COMING SOON</h1>
       

        </div>
    )
}