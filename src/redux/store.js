import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './user/user.reducer';
import weatherReducer from './weather/weather.reducer';

// TODO: Move out into seperate reducers folder.
const reducer = { userReducer, weatherReducer };

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
