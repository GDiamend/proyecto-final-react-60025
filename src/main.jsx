import React from 'react';
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './style.css';
import 'animate.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK4amdEnmDD7AjlC1reUwtSHu9CAEtZVk",
  authDomain: "proyecto-final-react-60025.firebaseapp.com",
  projectId: "proyecto-final-react-60025",
  storageBucket: "proyecto-final-react-60025.appspot.com",
  messagingSenderId: "994006167344",
  appId: "1:994006167344:web:d5041129bb8cc382cd62f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
