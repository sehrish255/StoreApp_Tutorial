import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PetsOrderContextProvider } from './context/petsOrderContext';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsaNO-JLW_LrWxSMPKrpIrFj8FLQ4e7As",
  authDomain: "pets-itec.firebaseapp.com",
  projectId: "pets-itec",
  storageBucket: "pets-itec.appspot.com",
  messagingSenderId: "1069066078462",
  appId: "1:1069066078462:web:220fa7c1ddffa8e03d3daf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <PetsOrderContextProvider>
    <App />
  </PetsOrderContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
