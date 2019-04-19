import React from "react"
import Nav from "./components/nav"
import Project from "./components/projects"
import "./App.css"

const App = () => {
  //x-snapping for side scrolling????
  return (
    <div className='container'>
      <div className='App'>
        <Nav />
        <div className='about'>
          <h2>
            Hi, I'm <em>Sean Glancy</em>
          </h2>
          <p>
            I am a <em>Front-end web developer</em> who currently lives in San
            Francisco, California. I enjoy making websites and learning new and
            exciting technologies.
          </p>
          <div>
            <button>View Resume</button>
            <button>Contact Sean</button>
          </div>
        </div>
        <div className='lower'>
          <p>Scroll Down to See my Projects</p>
          <img src='/arrow.svg' alt='placeholder img' />
        </div>
      </div>
      <div id='projects'>
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default App
