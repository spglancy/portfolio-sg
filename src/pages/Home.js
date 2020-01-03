import React from "react"
import Nav from "../components/nav"
import './home.css'

const Home = () => {
  return (
    <div className="App">
      <Nav />
      <div className="about">
        <h2>
          Hi, I'm <em>Sean Glancy</em>
        </h2>
        <p>
          I am a <em>Front-end web developer</em> who currently lives in San
          Francisco, California. I enjoy making websites and learning new and
          exciting technologies.
        </p>
        <div>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/document/d/14uN4HPk19BibcxZdlNvWqPvg5GghHtZaDgjlRYWYNlg/edit?usp=sharing"
          >
            <button>View Resume</button>
          </a>
          <button>Contact Sean</button>
        </div>
      </div>
      {/* <div className="lower">
        <p>Scroll Down to See my Projects</p>
        <img src="/arrow.svg" alt="placeholder img" />
      </div> */}
    </div>
  )
}

export default Home
