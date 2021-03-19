import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyles} from './globalStyled'
import Routes from './router'



ReactDOM.render(
  <React.StrictMode>
     <>
      <Routes />
      <GlobalStyles/>  
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


