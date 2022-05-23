import React from 'react';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

/* Components */
import rootReducer from '../reducers';
import App from '../../App';

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function ProdStore() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}