import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import {getTemp} from '../api/openWeatherMap'

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(location) {
    let self = this
    // debugger
    self.setState({isLoading: true})

    getTemp(location).then(function (temp) {
      self.setState({
        location,
        temp,
        isLoading: false
      })
    }).catch(function (err) {
      console.log(err.message)
      self.setState({isLoading: false})
    })
  }

  render() {
    let {isLoading, temp, location} = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />
      }
    }

    return (
      <div>
        <h3>Weather</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    )
  }
}
