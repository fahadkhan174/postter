import { authConstants } from '../../store/actionTypes';

const initialState = {
  loading: false,
  user: {
    roles: ['ROLE_USER']
  },
  authenticated: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case authConstants.USER_SIGNUP_REQUEST:
      return {
        ...state,
        loading: true
      };
    case authConstants.USER_SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false,
        error: null
      };
    case authConstants.USER_SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case authConstants.USER_SIGNIN_REQUEST:
      return {
        ...state,
        loading: true
      };
    case authConstants.USER_SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        authenticated: true,
        loading: false,
        error: null
      };
    case authConstants.USER_SIGNIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case authConstants.USER_SIGNOUT_REQUEST:
      return {
        ...state,
        loading: true
      };
    case authConstants.USER_SIGNOUT_SUCCESS:
      return {
        ...state,
        user: {
          roles: ['ROLE_USER']
        },
        authenticated: false,
        loading: false,
        error: null
      };
    case authConstants.USER_SIGNOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
