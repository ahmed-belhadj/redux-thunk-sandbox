import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux"; // applyMiddleware will be the function that we use to extend Redux.
import { Provider } from "react-redux";
import logger from "redux-logger"; // Our logger middleware that will print out our actions.. and states.
import Thunk from "redux-thunk"; // thunk --> grant the ability to make async actions.
import authenticationReducer from "./reducers/authenticationReducer";

const store = createStore(
  authenticationReducer,
  applyMiddleware(Thunk, logger)
);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
