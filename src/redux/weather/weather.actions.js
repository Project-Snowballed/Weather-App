import GOT_WEATHER from './weather.types';
import axios from 'axios';

//ACTION
export const gotWeather = (payload) => ({
  type: GOT_WEATHER,
  payload,
});

//THUNK
export const getWeather = () => {
  return async (dispatch) => {
    const APIKey = process.env.REACT_APP_WEATHER_API_KEY;
    console.log(APIKey);
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=New York City&appid=${APIKey}`
      );
      console.log('DATA OBJECT', response.data);
      dispatch(gotWeather(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
