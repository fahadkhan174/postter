import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(reduxThunk));
const store = createStore(rootReducer, composedEnhancer);

export default store;
