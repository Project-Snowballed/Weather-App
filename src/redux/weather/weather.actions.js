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
export const getWeather = (latitude, longitude) => {
  return async (dispatch) => {
    const APIKey = process.env.REACT_APP_WEATHER_API_KEY;
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&
        exclude={part}&appid=${APIKey}`
      );
    
      dispatch(gotWeather(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
