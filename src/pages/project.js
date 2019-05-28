import React from "react"

const Project = props => {
  const { title, desc, link, img } = props
  return (
    <div className="project">
      <h3>{title}</h3>
      <a href={link}>
        <img src={img} alt="placeholder img" />
      </a>
      <p>{desc}</p>
    </div>
  )
}

export default Project

// gotta do the css
