import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { Provider } from "react-redux";
import store from "./Store";

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));