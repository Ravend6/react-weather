import React from 'react'

export default class WeatherMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    let {temp, location} = this.props
    return (
      <div>
        <h3>{location} = {temp}C</h3>
      </div>
    )
  }
}
