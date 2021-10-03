import { combineReducers } from 'redux';
import user from '../components/_dashboard/user/User.reducer';
import auth from '../components/auth/Auth.reducer';
import alert from '../components/alert/Alert.reducer';

const rootReducer = combineReducers({
  user,
  auth,
  alert
});

export default rootReducer;
