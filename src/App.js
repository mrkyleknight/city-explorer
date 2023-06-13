import React from 'react';
import axios from 'axios';
import './App.css';
import Button from 'react-bootstrap/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      locationData: {},
      error: false,
      errorMsg: ''
    };
  }

  handleCityInput = (event) => {
    this.setState({
      city: event.target.value
    });
  };

  handleGetCityInfo = async (event) => {
    event.preventDefault();

    try {
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY_API}&q=${this.state.city}&format=json`;
      let response = await axios.get(url);

      const { display_name, lat, lon } = response.data[0];

      this.setState({
        locationData: {
          display_name,
          lat,
          lon
        },
        error: false,
        errorMsg: ''
      });
    } catch (error) {
      this.setState({
        error: true,
        errorMsg: error.response.data.error
      });
    }
  };

  render() {
    const { locationData, error, errorMsg } = this.state;
    const mapUrl = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_KEY_API}&center=${locationData.lat},${locationData.lon}&zoom=13&size=400x400`;

    return (
      <div className="app-container">
        <form onSubmit={this.handleGetCityInfo} className="form">
          <label htmlFor=""> Enter a City Name:
            <input type="text" onInput={this.handleCityInput} />
          </label>
          <Button variant="outline-primary" type="submit">Explore</Button>
        </form>

        {error ? (
          <p>{errorMsg}</p>
        ) : (
          <div className="location-container">
            <p>Location: {locationData.display_name}</p>
            <p>Latitude: {locationData.lat}</p>
            <p>Longitude: {locationData.lon}</p>
            <div className="map-container">
              <img src={mapUrl} alt="Map" className="map" />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
