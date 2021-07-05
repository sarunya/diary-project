import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import './css/index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AuthMiddleware } from './middleware/AuthMiddleware';
import reducers from './reducers/index.js'
import reportWebVitals from './reportWebVitals';



let store = createStore(
  reducers, 
  applyMiddleware(
    thunk,
    AuthMiddleware()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
