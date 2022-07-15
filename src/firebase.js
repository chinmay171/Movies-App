// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDynU4-o5nsMPaeNBU8uL7ytb1uyaqygvk",
  authDomain: "movieappsignin.firebaseapp.com",
  projectId: "movieappsignin",
  storageBucket: "movieappsignin.appspot.com",
  messagingSenderId: "868082980136",
  appId: "1:868082980136:web:3c2e26a4ed441abc4fac1d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();