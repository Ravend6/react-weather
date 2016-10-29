import React from 'react'
import {Link, IndexLink} from 'react-router'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(e) {
    e.preventDefault()
    let location = this.refs.search.value
    let titleLocation = location.substr(0, 1).toUpperCase() + location.substr(1)
    let encodedLocation = encodeURIComponent(titleLocation)
    if (titleLocation.length > 0) {
      this.refs.search.value = ''
      window.location.hash = '#/?location=' + encodedLocation
    }
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active"
              activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><Link to="/about" activeClassName="active"
              activeStyle={{fontWeight: 'bold'}}>About</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="search" placeholder="Search weather" /></li>
              <li><input type="submit" className="button" value="Get weather" /></li>
            </ul>
          </form>
        </div>
      </div>
    )
  }
}

// var old = (
//   <div>
//     <h2>Nav</h2>
//     <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
//     <Link to="about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
//   </div>
// )
