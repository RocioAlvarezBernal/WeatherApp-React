import React from 'react';
import Card from './Card';
import apiConfig from './apiKeys';
import cityName from './City'

class WeekContainer extends React.Component {

  state = {
    days: [],
    // location:"zip=75060",
    country: "us",
    degreeType: "imperial"
  }

  componentDidMount = () => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityName.cityValue},${this.state.country}&units=${this.state.degreeType}&APPID=${apiConfig.owmKey}`
    
    // const weatherURL = `api.openweathermap.org/data/2.5/weather?q=${cityName.cityValue}&appid=${apiConfig.owmKey}`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {

      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({days: dailyData})
    })
  }

  formatCards = () => {
    return this.state.days.map((day, index) => <Card day={day} key={index}/>)
  }

  updateCity = newCity => {
    this.setState({
      city: newCity
    }, this.sendNewFetch)
  }

  sendNewFetch = () => {
    const weatherURL = `http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${this.state.country}&units=${this.state.degreeType}&APPID=${apiConfig.owmKey}`

    // const weatherURL = `api.openweathermap.org/data/2.5/weather?q=${cityName.cityValue}&appid=${apiConfig.owmKey}`

    fetch(weatherURL)
    .then(res => res.json())
    .then(data => {
      const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
      this.setState({days: dailyData})
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">

          {this.formatCards()}

        </div>
      </div>
    )
  }
}

export default WeekContainer