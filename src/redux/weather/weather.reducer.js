import WeatherActionTypes from './weather.types';

const INITIAL_STATE = {
  name: '',
  temp: 0,
  feels_like: 0,
  cloudType: '',
  windSpeed: 0,
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  const { GOT_WEATHER } = WeatherActionTypes;
  const { type, payload } = action;
  switch (type) {
    case GOT_WEATHER:
      return {
        ...state,
        name: payload.name,
        temp: payload.main.temp,
        feels_like: payload.main.feels_like,
        cloudType: payload.weather[0].description,
        windSpeed: payload.wind.speed,
      };
    default:
      return state;
  }
};

export default weatherReducer;
