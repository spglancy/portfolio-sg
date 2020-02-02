import React from "react"
import Projects from "./pages/projects"
import Home from "./pages/Home"
import Nav from './components/nav'
import Footer from "./components/footer"
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Nav />
      <Home />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
