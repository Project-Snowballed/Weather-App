<<<<<<< HEAD
import UserActionTypes from './user.types';
=======
import UserActionTypes from "./user.types";
>>>>>>> master

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  const { GET_USER, REMOVE_USER } = UserActionTypes;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case REMOVE_USER:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userReducer;
