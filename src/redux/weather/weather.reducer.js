import WeatherActionTypes from './weather.types';

const INITIAL_STATE = {
  currentWeatherData: {},
};

const weatherReducer = (state = INITIAL_STATE, action) => {
  const { GOT_WEATHER } = WeatherActionTypes;
  switch (action.type) {
    case GOT_WEATHER:
      return {
        ...state,
        currentWeatherData: action.payload,
      };
    default:
      return state;
  }
};

export default weatherReducer;
