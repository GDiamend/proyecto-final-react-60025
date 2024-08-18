import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(<App/>)