// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyC3tSTRV7PwozRNJd_4QSQBYWYTlDrkjIs",
  authDomain: "anyblood-8a541.firebaseapp.com",
  databaseURL: "https://anyblood-8a541.firebaseio.com",
  projectId: "anyblood-8a541",
  storageBucket: "anyblood-8a541.appspot.com",
  messagingSenderId: "380340837488",
  appId: "1:380340837488:web:730235865412cafb1ce8b5",
  measurementId: "G-E1L21SS2D6",
};

// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
