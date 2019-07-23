import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.body.innerHTML = '<div id="app"></div>';
const rootElement = document.getElementById('app');

ReactDOM.render(<App />, rootElement);
