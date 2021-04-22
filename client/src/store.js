import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};
const middleware = [thunk];

// compose or composeWithDevTools -- if build fails change to compose
const store = createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(...middleware)
));

export default store;