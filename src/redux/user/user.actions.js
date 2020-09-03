import UserActionTypes from './user.types';

export const getUser = (user) => ({
  type: UserActionTypes.GET_USER,
  payload: user,
});
export const removeUser = () => ({
  type: UserActionTypes.REMOVE_USER,
});
