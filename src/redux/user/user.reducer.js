import { GET_USER, REMOVE_USER } from './user.actions';

const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
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
