import { alertConstants } from '../../store/actionTypes';

const defaultState = [];

export default (state = defaultState, action) => {
  switch (action.type) {
    case alertConstants.ADD_ALERT:
      return [...state, action.alert];

    case alertConstants.CLOSE_ALERT:
      return state.filter((alert) => alert.id !== action.id);

    case alertConstants.REMOVE_ALERT:
      return state.filter((alert) => alert.id !== action.id);

    default:
      return state;
  }
};
