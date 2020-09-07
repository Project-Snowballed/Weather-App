import WeatherActionTypes from './weather.types';

const INITIAL_STATE = {
  name: '',
  temp: 0,
  feels_like: 0,
  cloudType: '',
  windSpeed: 0,
};

const weatherReducer = (state = INITIAL_STATE, { type, payload }) => {
  const { GOT_WEATHER } = WeatherActionTypes;
  switch (type) {
    case GOT_WEATHER:
      return {
        ...state,
        name: payload.timezone.split('/').pop().replace('_', ' '),
        temp: payload.current.temp,
        feels_like: payload.current.feels_like,
        cloudType: payload.current.weather[0].description,
        windSpeed: payload.current.wind_speed,
      };
    default:
      return state;
  }
};

export default weatherReducer;
