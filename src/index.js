import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./redux/configureStore";
import { Provider } from "react-redux";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={Store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
