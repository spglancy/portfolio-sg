import React from "react"
import Project from "./project"
import './projects.css'

const Projects = props => {
  return (
    <div>
      <div id="projects">
        <Project
          title="Pixels Against People"
          desc="An online version of the popular card game Cards Against Humanity built using the MERN stack."
          link="https://pixelsagainstpeople.com"
          img="/cah.svg"
          tech="React, Express, Node, Mongo"
        />
      </div>
      <div id="projects">
        <Project
          title="Pixels Against People"
          desc="An online version of Cards Against Humanity"
          link="https://pixelsagainstpeople.com"
          img="cah.svg"
          tech="React, Express, Node, Mongo"
        />
      </div>
      <div id="projects">
        <Project
          title="Pixels Against People"
          desc="An online version of Cards Against Humanity"
          link="https://pixelsagainstpeople.com"
          img="cah.svg"
          tech="React, Express, Node, Mongo"
        />
      </div>
      <div id="projects">
        <Project
          title="Pixels Against People"
          desc="An online version of Cards Against Humanity"
          link="https://pixelsagainstpeople.com"
          img="cah.svg"
          tech="React, Express, Node, Mongo"
        />
      </div>
    </div>
  )
}

export default Projects
