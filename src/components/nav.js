import React, { Component } from "react"

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "Home",
      list: ["Home", "Projects", "Contact", "Resume"]
    }
  }

  renderList() {
    const { list, selected } = this.state
    return list.map(item => {
      return item === selected ? (
        <a className='selected' href='#home'>
          <li>{item}</li>
        </a>
      ) : (
        <a
          className=''
          href='#home'
          onClick={e => this.setState({ selected: item })}
        >
          <li>{item}</li>
        </a>
      )
    })
  }

  render() {
    return (
      <div className='nav'>
        <h2>Sean Glancy</h2>
        <ul>{this.renderList()}</ul>
      </div>
    )
  }
}

export default Nav
