import React, { Component } from "react"

class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: "Home",
      list: ["Home", "Projects", "Contact"]
    }
  }

  renderList() {
    const { list, selected } = this.state
    return list.map(item => {
      return item === selected ? (
        <a className="selected" href={"#" + item}>
          <li>{item}</li>
        </a>
      ) : (
          <a
            className=""
            href={"#" + item}
            onClick={() => this.setState({ selected: item })}
          >
            <li>{item}</li>
          </a>
        )
    })
  }

  render() {
    return (
      <div className="nav">
        <h2>Sean Glancy</h2>
        <ul>
          {this.renderList()}
          <a
            className=""
            rel="noopener noreferrer"
            target="_blank"
            href="https://drive.google.com/file/d/1eZGpBocTfZT-w35n_7RPVHg_9Er1v-1D/view?usp=sharing"
          >
            <li>Resume</li>
          </a>
        </ul>
      </div>
    )
  }
}

export default Nav
