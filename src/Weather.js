import React from "react";

class Weather extends React.Component {
  render() {
    console.log('Weathers prop:', this.props)
    return (
      <div>
        <h2>Weather</h2>
        {this.props.forecastData.map((day, index) => {
          return <div key={index} className="weather-div">
            <div className="weather-card">
            <p>Date: {day.date}</p>
            <p>Description: {day.description}</p>
      </div>
    </div>
  })}
  </div>
    );
        }
      }

export default Weather;





