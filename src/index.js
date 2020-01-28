import React from 'react';
import ReactDOM from 'react-dom';

import './assets/sass/main.scss'

import { GithubContextProvider } from './contexts';

import App from './App';
// import AppClass from './AppClass';
// import AppHooks from './AppHooks';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <GithubContextProvider>
    <App />
    {/* <AppClass /> */}
    {/* <AppHooks /> */}
  </GithubContextProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
