import axios from 'axios';
import WeatherActionTypes from './weather.types';

const { GOT_WEATHER } = WeatherActionTypes;

//ACTION
export const gotWeather = (payload) => {
  return {
    type: GOT_WEATHER,
    payload,
  };
};

//THUNK
export const getWeather = () => {
  return async (dispatch) => {
    const APIKey = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=New York City&appid=${APIKey}`
      );
      dispatch(gotWeather(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
