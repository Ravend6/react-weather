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
        <h3 className="text-center">{location} = {temp} &#8451;</h3>
      </div>
    )
  }
}
