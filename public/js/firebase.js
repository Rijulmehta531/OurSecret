// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from 'firebase-admin/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMMoRQd0UrReFBSzyfjXvv0RB-Ihzx8I0",
  authDomain: "oursecret-ef472.firebaseapp.com",
  projectId: "oursecret-ef472",
  storageBucket: "oursecret-ef472.appspot.com",
  messagingSenderId: "186642929268",
  appId: "1:186642929268:web:c22938baa4d6113aae6321",
  measurementId: "G-HR2Z4SNS98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);