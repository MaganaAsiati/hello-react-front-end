import { createStore, applyMiddleware } from 'redux';
import greetingsReducer from './Greetings'
import thunk from 'redux-thunk';


const store = createStore(greetingsReducer, applyMiddleware(thunk));

export default store;