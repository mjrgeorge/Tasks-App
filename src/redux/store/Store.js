import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import RootReducer from '../reducers/RootReducer';

const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)


export default function Store(previousState) {
  const store = createStore(
    RootReducer,
    previousState,
    composedEnhancers,
  );
  return store;
};