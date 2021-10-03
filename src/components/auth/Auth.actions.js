import alertTypes from '../../constants/alertTypes';
import { addAlert } from '../alert/Alert.actions';
import { authConstants } from '../../store/actionTypes';
import authService from './Auth.service';

const signup = (values) => async (dispatch) => {
  dispatch({ type: authConstants.USER_SIGNUP_REQUEST });
  authService
    .register(values)
    .then((response) => {
      dispatch({ type: authConstants.USER_SIGNUP_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      dispatch({ type: authConstants.USER_SIGNUP_FAILURE, payload: error });
    });
};

const signin = (values) => async (dispatch) => {
  dispatch({ type: authConstants.USER_SIGNIN_REQUEST });
  authService
    .login(values)
    .then((response) => {
      dispatch({ type: authConstants.USER_SIGNIN_SUCCESS, payload: response.data });
      dispatch(addAlert('LOGIN SUCCESS', alertTypes.SUCCESS));
    })
    .catch((error) => {
      dispatch({ type: authConstants.USER_SIGNIN_FAILURE, payload: error.response });
      dispatch(addAlert('LOGIN ERROR', alertTypes.ERROR));
    });
};

const signout = () => async (dispatch) => {
  dispatch({ type: authConstants.USER_SIGNOUT_REQUEST });
  authService.logout();
  dispatch({ type: authConstants.USER_SIGNOUT_SUCCESS });
  dispatch(addAlert('LOGOUT SUCCESS', alertTypes.SUCCESS));
};

export const authActions = {
  signup,
  signin,
  signout
};
