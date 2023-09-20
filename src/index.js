import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = document.getElementById('root');
const appRoot = ReactDOM.createRoot(root);
appRoot.render(
  <Provider store={store}>
    <App />
  </Provider>
);
