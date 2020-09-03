import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import userReducer from "./user/user.reducer";

const middleware = [...getDefaultMiddleware(), logger];

// TODO: Move out into seperate reducers folder.
const reducer = {
  userReducer,
};

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
