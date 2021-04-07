import React from "react";
//var ReactDOM = require('react-dom');


import '../style.css';
import Grid from '@material-ui/core/Grid';

import Header from '../components/Header'; 
import ContentsGrid from '../components/ContentsGrid';


export default function Home() {
  return (
    <div className = "home">
      <Header className = "header">
      </Header>


      <ContentsGrid>
      </ContentsGrid>
      
      </div>
       
  )
}