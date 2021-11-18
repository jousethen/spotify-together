import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//import Test from './test/test';
import About from './components/About';
import Instructions from './components/Instructions';
const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/callback" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/instructions" element={<Instructions />} />
      </Routes>
    </Router>
  </Provider>,
  document.getElementById("root")
);

