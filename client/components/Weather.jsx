import React from 'react'
import WeatherForm from './WeatherForm'
import WeatherMessage from './WeatherMessage'
import {getTemp} from '../api/openWeatherMap'
import ErrorModal from './ErrorModal'

export default class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    let location = this.props.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  }

  componentWillReceiveProps(newProps) {
    let location = newProps.location.query.location

    if (location && location.length > 0) {
      this.handleSearch(location)
      window.location.hash = '#/'
    }
  }

  handleSearch(location) {
    let self = this
    // debugger
    self.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })

    getTemp(location).then(function (temp) {
      self.setState({
        location,
        temp,
        isLoading: false
      })
    }).catch(function (err) {
      console.log(err.message)
      self.setState({
        isLoading: false,
        errorMessage: 'Ошибка! Такого города нет в базе данных.'
      })
    })
  }

  render() {
    let {isLoading, temp, location, errorMessage} = this.state

    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location} />
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage} />
        )
      }
    }

    return (
      <div>
        <h3 className="text-center page-title">Погода</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
        {renderError()}
      </div>
    )
  }
}
