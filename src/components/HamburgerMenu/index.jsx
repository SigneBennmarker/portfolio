import React, { useState } from "react"
import { Pivot as Hamburger } from "hamburger-react"
import Menu from "../Menu"
import "../../style.css"

import { Fade } from "@material-ui/core"

export default function HamburgerMenu() {
  const [open, setOpen] = useState(false)

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
        onToggle={() => setOpen(!open)}
        //   if (toggled) {
        //     handleClick()
        //   } else {
        //     handleClose()
        //   }
        // }}
        //onClick={ () => setOpen(!open)}
      />
      <Fade in={open} timeout={400}>
        <div id={open ? "show" : "noShow"} onClick={() => setOpen(!open)}>
          <Menu></Menu>
        </div>
      </Fade>
    </>
  )
}
