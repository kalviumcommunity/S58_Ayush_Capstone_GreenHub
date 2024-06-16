import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';

console.log('Main.jsx is being executed'); // Added console.log statement

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

