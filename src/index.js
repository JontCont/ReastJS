import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Ex01 from './ex_01';
import reportWebVitals from './reportWebVitals';

const el = <p>Hello React !!</p>

ReactDOM.render(
  <React.StrictMode>
    <Ex01 />
  </React.StrictMode>,
  document.getElementById('root')
);


