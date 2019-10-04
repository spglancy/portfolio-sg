import React from "react"

const Project = props => {
  const { title, desc, link, img } = props
  return (
    <div className="project">
      <div className="projectDesc">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <a href={link}>
        <img className="desktopImage" src={img} alt="placeholder img" />
      </a>
    </div>
  )
}

export default Project

// gotta do the css
