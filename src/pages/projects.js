import React from "react"
import Project from "./project"

const Projects = props => {
  return (
    <div>
      <div id="projects">
        <Project
          title="Pixels Against People"
          desc="An online version of Cards Against Humanity"
          link="https://pixels-against-people.herokuapp.com/"
          img="/cah.png"
        />
      </div>
      <div id="projects">
        <Project
          title="Pixels Against People"
          desc="An online version of Cards Against Humanity"
          link=""
          img=""
        />
      </div>
    </div>
  )
}

export default Projects
