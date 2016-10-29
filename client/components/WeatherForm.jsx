import React from 'react'

export default class WeatherForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault()
    let location = this.refs.location.value
    let titleLocation = location.substr(0, 1).toUpperCase() + location.substr(1)
    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(titleLocation)
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="search" ref="location" placeholder="Введите название города" />
          <button className="button expanded hollow">Узнать погоду</button>
        </form>
      </div>
    )
  }
}
