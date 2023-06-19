import React from "react";
import './App.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends React.Component {
  render() {
    console.log('Weathers prop:', this.props);
    return (
      <div>
        <h2>Weather</h2>
        {this.props.forecastData.map((day, index) => {
          return (
            <div key={index} className="weather-div">
              <Card className="weather-card">
                <Card.Body>
                  <Card.Title>Date: {day.date}</Card.Title>
                  <Card.Text>Description: {day.description}</Card.Text>
                  <Card.Text>Temp: {day.temp}</Card.Text>
                  <Card.Text>High Temp: {day.highTemp}</Card.Text>
                  <Card.Text>Low Temp: {day.lowTemp}</Card.Text>
                  <Card.Text>Precip: {day.precip}</Card.Text>
                  <Card.Text>Cloud Cover: {day.cloudClover}</Card.Text>
                  <Card.Text>Feels Like: {day.feelslike}</Card.Text>
                  <Card.Text>Humidity: {day.humidity}</Card.Text>
                  <Card.Text>Wind Speed: {day.windSpeed}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Weather;





