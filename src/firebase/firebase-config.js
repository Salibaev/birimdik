// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_bMzoAQaLhnI5PiNOQpEI7OHqU8LdwuQ",
  authDomain: "birimdik-35d2b.firebaseapp.com",
  projectId: "birimdik-35d2b",
  storageBucket: "birimdik-35d2b.appspot.com",
  messagingSenderId: "806199593777",
  appId: "1:806199593777:web:6c1342f9b921814589fe10",
  measurementId: "G-NYKENM6WXS"
};
const clientId = '';
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const analytics = app.analytics();
export const provider = firebase.auth.GoogleAuthProvider;
export const auth = app.auth();

