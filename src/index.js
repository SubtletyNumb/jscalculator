import React from 'react';
import ReactDOM from 'react-dom/client';
import './style-sheets/index.css'
import App from './App';
import { Provider } from 'react-redux';
import {Store} from './Store.js'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />, document.querySelector("#root"))
