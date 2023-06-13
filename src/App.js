
import React from 'react';
import axios from 'axios';

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
    return (
      <>
        <form onSubmit={this.handleGetCityInfo}>
          <label htmlFor=""> Enter a City Name:
            <input type="text" onInput={this.handleCityInput} />
          </label>
          <button type="submit">Explore!</button>
        </form>

        {
          this.state.error
            ? <p>{this.state.errorMsg}</p>
            : (
              <div>
                <p>Location: {this.state.locationData.display_name}</p>
                <p>Latitude: {this.state.locationData.lat}</p>
                <p>Longitude: {this.state.locationData.lon}</p>
              </div>
            )
        }
      </>
    );
  }


}

export default App;
