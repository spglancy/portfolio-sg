import React from "react"

const Nav = () => {
  return (
    <div className='nav'>
      <h2>Sean Glancy</h2>
      <ul>
        <a className='selected' href='#home'>
          <li>Home</li>
        </a>
        <a href='#projects'>
          <li>Projects</li>
        </a>
        <a href='#contact'>
          <li>Contact</li>
        </a>
      </ul>
    </div>
  )
}

export default Nav
