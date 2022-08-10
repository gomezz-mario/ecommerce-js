import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMdx8vthCg4phgWfHIj9ogLfq2xlBTX1I",
  authDomain: "eccomerce-reactjs.firebaseapp.com",
  projectId: "eccomerce-reactjs",
  storageBucket: "eccomerce-reactjs.appspot.com",
  messagingSenderId: "821523979046",
  appId: "1:821523979046:web:772d0c1d8f537efceaffe7",
  measurementId: "G-MCTTZ05NEH"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
