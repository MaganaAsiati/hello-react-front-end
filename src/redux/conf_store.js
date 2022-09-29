import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import greetingsReducer from './Greetings';

const store = createStore(greetingsReducer, applyMiddleware(thunk));

export default store;
