import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReactDOM from 'react-dom';
import {GlobalStyles} from './globalStyled'
import Routes from './router'

const reducer = (state = [], action) => {
  state.push('taofik')
  console.log('reducer', state);
  return [state]
}
const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
  <React.StrictMode>
     <>
      <Provider store={store}>
        <Routes />
        <GlobalStyles/>
      </Provider>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


