import { userConstants } from '../../../store/actionTypes';

const initialState = {
  loading: false,
  users: [],
  error: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.GET_ALL_USER:
      return {
        ...state,
        loading: true
      };
    case userConstants.GET_ALL_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case userConstants.GET_ALL_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

export default user;
