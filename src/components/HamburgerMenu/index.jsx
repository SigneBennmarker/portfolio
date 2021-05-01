import React, { useState } from "react"
import { Pivot as Hamburger } from "hamburger-react"
import Menu from "../Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Button from "@material-ui/core/Button"
import useStyles from "./styles";
import '../../style.css'

import { Fade } from '@material-ui/core';


export default function HamburgerMenu() {
//  const classes = useStyles()


  const [open, setOpen] = useState(false)
  //const [anchorEl, setAnchorEl] = React.useState(null)

  //  const handleClick = () => {
  //  setOpen(Cur => !open)
  // }



  // const handleClose = () => {
  //   setAnchorEl(null)
  // }
  return (
    <>
      
        <Hamburger
          // ref={anchorEl}
          // toggle={setOpen}
          // toggled={open}
           size={25}
           color="#000000"
          // direction="right"
          // duration={0.6}
           onToggle={ () => setOpen(!open)}
          //   if (toggled) {
          //     handleClick()
          //   } else {
          //     handleClose()
          //   }
          // }}
          //onClick={ () => setOpen(!open)}
        />
          <Fade in={open} timeout={400}>
      <div  id = {open ? "show" : "noShow"} onClick ={ () => setOpen(!open)} >
      
      
      <Menu></Menu>
 
      </div>
      </Fade>
    </>
  )
}
