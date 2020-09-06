import React, { Component } from 'react';
import { getWeather } from '../../redux/weather/weather.actions';
import { connect } from 'react-redux';
import './homepage.styles.css';

class Homepage extends Component {
  componentDidMount() {
    this.props.getWeather();
  }

  convertKtoF(kTemp) {
    return Math.round(((kTemp - 273.15) * 9) / 5 + 32);
  }

  convertMStoMPH(msSpeed) {
    return Math.round(msSpeed * 2.237);
  }

  render() {
    const { name, temp, feels_like, cloudType, windSpeed } = this.props;
    return (
      <div>
        {temp && windSpeed ? (
          <div className="homepage">
            <h1>HOMEPAGE</h1>
            <h2>Location:{name}</h2>
            <h3>Actual Temperature: {this.convertKtoF(temp)} degrees</h3>
            <h3>Feels Like: {this.convertKtoF(feels_like)} degrees</h3>
            <h3>How Is It Outside?: {cloudType}</h3>
            <h3>Wind Speed: {this.convertMStoMPH(windSpeed)} MPH</h3>
          </div>
        ) : (
          <div>
            <h2>Loading...</h2>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  weather: { name, temp, feels_like, cloudType, windSpeed },
}) => {
  return {
    name,
    temp,
    feels_like,
    cloudType,
    windSpeed,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getWeather: () => dispatch(getWeather()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
