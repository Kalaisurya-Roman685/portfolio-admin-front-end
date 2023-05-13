import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'leaflet/dist/leaflet.css';
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Provider } from "react-redux";
import store from "./Redux/stores/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer></ToastContainer>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </>
);


reportWebVitals();
