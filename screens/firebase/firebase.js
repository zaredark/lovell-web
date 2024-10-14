// Import the functions you need from the SDKs you need
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIvIndaqRTrww1y3FuKRjr-2OzmB2Xqu8",
  authDomain: "lovell-app.firebaseapp.com",
  projectId: "lovell-app",
  storageBucket: "lovell-app.appspot.com",
  messagingSenderId: "1090970075705",
  appId: "1:1090970075705:web:5c9cc3736590c37eaf83e8",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = firebase.firestore();
const auth = firebase.auth();

export {auth, db};