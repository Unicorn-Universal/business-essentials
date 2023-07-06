import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: process.env,

    authDomain: "business-essentials-5e5fb.firebaseapp.com",
  
    projectId: "business-essentials-5e5fb",
  
    storageBucket: "business-essentials-5e5fb.appspot.com",
  
    messagingSenderId: "410497982056",
  
    appId: "1:410497982056:web:0dae6d55fa1c39412e65dd",
  
    measurementId: "G-PGWM224LMF"
  
})