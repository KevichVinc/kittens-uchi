import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import profiles from './reducers/profiles';

const store = createStore(
  profiles,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
