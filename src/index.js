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
  apiKey: "AIzaSyCZBqzCMfFR7B96YnGTGYowg1mU3rE3dhU",
  authDomain: "pets-tutorial-itec.firebaseapp.com",
  projectId: "pets-tutorial-itec",
  storageBucket: "pets-tutorial-itec.appspot.com",
  messagingSenderId: "801992362663",
  appId: "1:801992362663:web:838ae2321d84252c0a2982"
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
