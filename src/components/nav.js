import React from "react"
import './nav.css'

function Nav() {
  return (
    <nav>
      <h2>Sean Glancy</h2>
      <ul>
        <li><a href='#home'>Home<div></div></a></li>
        <li><a href='#projects'>Projects<div></div></a></li>
        <li><a href='#contact'>Contact<div></div></a></li>
        <li><a href='https://drive.google.com/file/d/1eZGpBocTfZT-w35n_7RPVHg_9Er1v-1D/view?usp=sharing' rel='noopener noreferrer' target='_blank'>Resume<div></div></a></li>
      </ul>
    </nav>
  )
}

export default Nav
