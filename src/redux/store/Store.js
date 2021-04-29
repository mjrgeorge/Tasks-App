import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import counterReducer from '../reducers/CounterReducer';

const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = composeWithDevTools(...enhancers)


export default function Store(previousState) {
  const store = createStore(
    counterReducer,
    previousState,
    composedEnhancers,
  );
  return store;
};