import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const ConfigureStore = () => {
  const initialState = {};
  const store = createStore(
    combineReducers({}),
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return store;
};

export default ConfigureStore;
