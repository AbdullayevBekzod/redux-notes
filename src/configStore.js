import {createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import {applyMiddleware} from "redux";
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;