import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/root-reducer";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.scss";
import App from "./App";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
