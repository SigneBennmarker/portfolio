import React, { useRef, useEffect, useContext, createContext } from "react"
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
import "../style.css"
import ContentsGrid from "../components/ContentsGrid"
import NavBar from "../components/Nav"
import AboutMe from "../components/AboutMe"
import Contact from "../components/Contact"
import WorkGrid from "../components/WorkGrid"
import MiddleSection from'../components/MiddleSection'
import { Fade, Container } from '@material-ui/core';
import Tottot from '../components/Tottot'
import LarsViner from '../components/LarsViner'

// const WorkContext = React.createContext(WorkRef);
// const ContactContext = React.createContext();


export default function TottotPage() {
  // const AboutRef = useRef(null)
  // const WorkRef = useRef(null);
  // const ContactRef = useRef(null);
  //const AboutContext = React.createContext(AboutContext);


  return (
    <>

    
    <NavBar></NavBar>
    <Tottot/>
</>
    )
}