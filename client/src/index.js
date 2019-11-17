import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import 'semantic-ui-css/semantic.min.css';

import KingsLanding from "./components/KingsLanding";

const store = createStore(() => {}, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <KingsLanding />
  </Provider>,
  document.getElementById("root")
);
