import React from "react"
import Nav from "./components/nav"
import Project from "./components/projects"
import "./App.css"

const App = () => {
  return (
    <div className='container'>
      <div className='App'>
        <Nav />
        <div className='about'>
          <h2>
            Hi, I'm <span>Sean Glancy</span>
          </h2>
          <p>
            I am a <span>Front-end web developer</span> who currently lives in
            San Francisco, California. I enjoy making websites and yata yata
            yata yata yata yata
          </p>
          <div>
            <button>View Resume</button>
            <button>Contact Sean</button>
          </div>
        </div>
        <div className='lower'>
          <p>Scroll Down to See my Projects</p>
          <img src='/arrow.svg' />
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
