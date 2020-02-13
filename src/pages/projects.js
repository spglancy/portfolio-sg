import React from "react"
import Project from "./project"
import './projects.css'

const Projects = props => {
  return (
    <div className="projects" id="projects">
      <h2 align='center'>PORTFOLIO</h2>
      <Project
        title="Pixels Against People"
        desc="An online version of the popular card game Cards Against Humanity built using the MERN stack."
        link="https://pixelsagainstpeople.com"
        img="/cah.svg"
        tech="React, Express, Node, Mongo"
      />
      <Project
        title="Reversi"
        desc="A pass and play version of the game Reversi"
        link="https://pixelsagainstpeople.com"
        img="reversi.svg"
        tech="React, Express, Node, Mongo"
      />
    </div>
  )
}

export default Projects
