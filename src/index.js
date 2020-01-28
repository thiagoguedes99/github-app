import React from 'react';
import ReactDOM from 'react-dom';

import './assets/sass/main.scss'

import { GithubContextProvider } from './contexts';

import App from './App';
import TestClass from './testClass';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <GithubContextProvider>
    <App />
    {/* <TestClass /> */}
  </GithubContextProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
