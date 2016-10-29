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
    if (location.length > 0) {
      this.refs.location.value = ''
      this.props.onSearch(location)
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
