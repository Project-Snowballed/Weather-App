<<<<<<< HEAD
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import userReducer from './user/user.reducer';
=======
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user/user.reducer";
>>>>>>> master

const middleware = [...getDefaultMiddleware(), logger];

// TODO: Move out into seperate reducers folder.
<<<<<<< HEAD
const reducer = { userReducer };
=======
const reducer = {
  userReducer,
};
>>>>>>> master

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
