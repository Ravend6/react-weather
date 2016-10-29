import React from 'react'
import Nav from './Nav'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <Nav />
        <h2>Main</h2>
        {this.props.children}
      </div>
    )
  }
}
