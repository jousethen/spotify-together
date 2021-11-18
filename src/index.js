import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Test from './test/test';

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/callback" element={<App />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);

