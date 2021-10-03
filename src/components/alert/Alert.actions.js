import { alertConstants } from '../../store/actionTypes';
import createAlert from './Alert.service';

export const addAlert = (message, type) => async (dispatch) => {
  const toastId = Math.round(new Date() / 1000).toString();
  createAlert(message, type, {
    toastId,
    onClose: () => {
      dispatch(removeAlert(toastId));
    }
  });
  const alert = {
    id: toastId,
    message,
    type
  };
  dispatch({ type: alertConstants.ADD_ALERT, alert });
};

// const closeAlert = (id) => async (dispatch) => dispatch({ type: alertConstants.REMOVE_ALERT, id });

const removeAlert = (id) => async (dispatch) => dispatch({ type: alertConstants.REMOVE_ALERT, id });
