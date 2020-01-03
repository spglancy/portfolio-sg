import React from "react"
import './projects.css'

const Project = props => {
  const { title, desc, link, img } = props
  return (
    <div className="project">
      <a href={link}>
        <img className="desktopImage" src={img} alt="placeholder img" />
      </a>
      <div className="projectDesc">
        <h1>{title}</h1>
        <p>{desc}</p>
        <div>
          <a href={link}>Visit Site</a>
          <a href={link}>View Github</a>
        </div>

      </div>
    </div>
  )
}

export default Project

// gotta do the css
