import { userConstants } from '../../../store/actionTypes';
import userService from './User.service';

const getAllUsers = () => (dispatch) => {
  dispatch({ type: userConstants.GET_ALL_USER });
  return userService
    .getAllUsers()
    .then((response) => {
      dispatch({ type: userConstants.GET_ALL_USER_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: userConstants.GET_ALL_USER_FAILURE, payload: error });
    });
};

export const userActions = {
  getAllUsers
};
