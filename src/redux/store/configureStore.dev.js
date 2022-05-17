import React from 'react';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

/* Components */
import rootReducer from '../reducers';
import App from '../../App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default function DevStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}