import React from "react"
import Projects from "./pages/projects"
import Home from "./pages/Home"
import Nav from './components/nav'
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Home />
      <Projects />
    </div>
  )
}

export default App
