import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import kittens from './reducers/kittens';

const store = createStore(kittens, composeWithDevTools(applyMiddleware(thunk)));

export default store;
