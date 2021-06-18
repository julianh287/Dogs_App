import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index.js';

const store= createStore(rootReducer, applyMiddleware(thunk));
export default store;