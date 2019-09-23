import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';
import Collections from './components/Collections';
import LogIn from './components/LogIn';

ReactDOM.render(<App />, document.querySelector('#pma-main-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
